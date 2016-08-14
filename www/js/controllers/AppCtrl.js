controllers.controller('AppCtrl', function($scope, $location, $ionicHistory, $ionicPopup, AccountService) {

	$scope.user;

	firebase.auth().onAuthStateChanged(function(user) {

		if (user) {
			$scope.user = user;
			AccountService.createOrReplaceAccount(user);
			if($ionicHistory.currentView().stateId == 'login')
				$location.path("/chats");
		} else {
			$location.path("/login");
		}

		$scope.$apply();
	});

	$scope.signInWithFacebook = function(){
		var provider = new firebase.auth.FacebookAuthProvider();
		provider.addScope('user_friends');
		firebase.auth().signInWithRedirect(provider).then(function(result) {})
		.catch(function(error) {
		  $scope.showAlert('Falha', getFirebaseErrorMessage(error.code), error);
		});
	}

	$scope.doLogout = function() {
		firebase.auth().signOut().then(function() {}, function(error) {
			$scope.showAlert('Falha', getFirebaseErrorMessage(error.code), error);
		});
	};

	//Generic Alert
	$scope.showAlert = function(title, message, error) {
	 	var alertPopup = $ionicPopup.alert({
	 		title: title,
	 		template: message
	 	});

	 	alertPopup.then(function(res) {
	 		if (error != undefined)
	 			console.log(error);
	 	});
	};
})