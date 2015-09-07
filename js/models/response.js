$(function(){
	var Response = Backbone.Model.extend({

	});
	
	var ResponseList = Backbone.Collection.extend({
			model: Response,
			
			localStorage: new Backbone.LocalStorage("career-capital-quiz-responses"),
	});
	
	// Export to window
	window.app = window.app || {};
	window.app.Response = Response;
	window.app.ResponseList = ResponseList;
});

