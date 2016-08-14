controllers.controller('ChatDetailCtrl', function($scope, $stateParams, ChatService) {
  	ChatService.createOrReplace($scope.user.uid + '-' + $stateParams.recipientUserId);
})