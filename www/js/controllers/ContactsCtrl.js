controllers.controller('ContactsCtrl', function($scope, ContactService) {

	$scope.contacts = [];

	$scope.fill = function(){
		ContactService.all(function(list){
			$scope.contacts = list;
			$scope.$apply();
		});	
	}

	$scope.fill();
})