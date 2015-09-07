$(function(){
	var Question = Backbone.Model.extend({
		initialize: function() {
			
			// provide to view template for dynamic sizing
			this.set("responseWidth", Math.round(100 / this.get("responseOptions").length));
		}

	});
	
	var QuestionList = Backbone.Collection.extend({
			model: Question
	});
	
	// Export to window
	window.app = window.app || {};
	window.app.Question = Question;
	window.app.QuestionList = QuestionList;
});

