$(function(){
	var Response = Backbone.Model.extend({
				idAttribute: "questionId",       // Enforce one response per question
				
				defaults: {
								"value": undefined
				},
				
				getFilter: function() {
					return _.where(app.questions.get(this.get("questionId")).get("responseOptions"), _.bind(function(responseOption) { responseOption.slug == this.value }, this))[0].filter;
				}

	});

	var ResponseList = Backbone.Collection.extend({
			model: Response,

			localStorage: new Backbone.LocalStorage("career-capital-quiz-responses"),

			questionHasBeenAnswered: function(question) {
				return question && (this.get(question.id) !== undefined);
			},

			allQuestionsAnswered: function() {
				return app.questionData.length == this.length
			},
			
			getFiltersFromQuestions: function() {
				var filters = [];

				this.forEach(function(result) {
					var filter = result.getFilter();
					if (filter !== "") filters.push(filter);
				});

				return filters;
			}
	});

	// Export to window
	window.app = window.app || {};
	window.app.Response = Response;
	window.app.ResponseList = ResponseList;
});
