$(function(){
	
	// initialize questions
	var questions = new app.QuestionList(app.questionData);
	
	// initialize main app view
	var QuestionListView = new app.QuestionListView({collection: questions});
});
