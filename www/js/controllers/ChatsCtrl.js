controllers.controller('ChatsCtrl', function($scope, ChatService) {

	$scope.chats = [];

	$scope.$on("$ionicView.beforeEnter", function(){
		ChatService.all(function(list){
		
			$scope.chats = list;			

			console.log($scope.chats);
			$scope.$apply();
		});   
	});

	$scope.remove = function(chat) {
		ChatService.remove(chat);
	};
})