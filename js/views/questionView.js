$(function() {
	var QuestionListView = Backbone.View.extend({
		el: $("#questionListContainer"),
		
		questionTemplate: _.template($("#questionTemplate").html()),
		
		initialize: function() {
			this.render();
		},
		
		render: function() {
			this.collection.forEach(_.bind(function(question) {
				console.log(question.toJSON());
				this.$el.append(this.questionTemplate(question.toJSON()))
			}, this));
			
			// render question template
			// set up controls
			
			// LATER: add percent completion bar
			
			
		}
	});
	
	window.app = window.app || {};
	window.app.QuestionListView = QuestionListView;
});
