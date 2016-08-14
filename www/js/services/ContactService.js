services.factory('ContactService', function() {

  var userList = [];

  return {
    all: function(success) {
      database.ref('/users').on('value', function(snapshot){

        userList = [];
        snapshot.forEach(function(child){
          userList.push(child);
        });

        success(userList);
      });
    }
  };
});
