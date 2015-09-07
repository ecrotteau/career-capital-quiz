$(function() {
	var QuestionListView = Backbone.View.extend({
		el: $("#quizContainer"),
		questionTemplate: _.template($("#questionTemplate").html()),
		
		initialize: function() {
			this.visible = this.collection.get(1);		//TODO: or from localStorage
			this.responses = new app.ResponseList();	// TODO: or from localStorage
			this.render();
		},
		
		events: {
			"change input[type=radio]" : "updateResponses",
			"click .arrow-left.active" : "previousQuestion",
			"click .arrow-right.active" : "nextQuestion",
		},
		
		render: function() {
			this.collection.forEach(_.bind(function(question) {
				this.$el.find("#questionListContainer").append(this.questionTemplate(question.toJSON()))
			}, this));
			
			this.$el.find(this.visible.domId()).show();
			
			// set up controls
			
			// LATER: add percent completion bar
			
			
		},
		
		updateResponses: function(event) {
			var target = $(event.target);
			var choice = target.val();
			var questionId = target.data("question-id");

			var response = this.responses.get(questionId) || this.responses.add({"questionId": questionId});
			response.save({value: choice});
		}
	});
	
	window.app = window.app || {};
	window.app.QuestionListView = QuestionListView;
});
