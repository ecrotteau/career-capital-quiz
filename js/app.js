$(function(){
	var listener = _.extend({}, Backbone.Events);

	// initialize questions
	var questions = new app.QuestionList(app.questionData);

	// load career data
	var careers = new app.CareerList(app.careerData);
	// initialize main app view
	var QuestionListView = new app.QuestionListView({collection: questions, listener: listener});
	var CareerListView = new app.CareerListView({collection: careers, listener: listener});
	app.questions = questions;

});
