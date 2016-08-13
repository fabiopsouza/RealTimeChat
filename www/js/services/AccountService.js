services.factory('AccountService', function() {

  return {
    createOrReplaceAccount: function(user) {
      database.ref('/users/' + user.uid).set({
        name: user.displayName,
        photo: user.photoURL
      });
    }
  };
});
