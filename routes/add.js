var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var named = request.query.name;
	var descriptioned = request.query.description;
	var newFriend = {
		"name" : named,
		"description" : descriptioned,
		"imageURL" : "http://lorempixel.com/500/500/people"
	}
	response.render('index.handlebars', data);
	data.friends.push(newFriend);
 }

