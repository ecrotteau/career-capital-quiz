$(function(){
	var Response = Backbone.Model.extend({
        idAttribute: "questionId",       // Enforce one response per question
        
        defaults: {
                "value": undefined
        }

	});
	
	var ResponseList = Backbone.Collection.extend({
			model: Response,
			
			localStorage: new Backbone.LocalStorage("career-capital-quiz-responses"),
            
            questionHasBeenAnswered: function(question) {
                    return this.get(question.id) !== undefined;
			}
	});
	
	// Export to window
	window.app = window.app || {};
	window.app.Response = Response;
	window.app.ResponseList = ResponseList;
});

