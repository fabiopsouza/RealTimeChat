services.factory('ChatService', function() {

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
    },
    remove: function(chat) {
      console.log('remove...');
    },
    get: function(chatId) {
      console.log('get...');
    }
  };
});
