services.factory('ChatService', function() {

	return {
		createOrReplace: function(id){
			console.log(id);
			database.ref().child('chats').push();
		},
		get: function(id){
			database.ref('/chats').on('value', function(snapshot){

				console.log(snapshot);
				snapshot.forEach(function(child){
					//userList.push(child);
				});

				success();
			});
		}
	};
});
