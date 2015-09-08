$(function(){
	
	// initialize questions
	var questions = new app.QuestionList(app.questionData);
	
	// load career data
	var careers = new app.CareerList(app.careerData);
    
	// initialize main app view
	var QuestionListView = new app.QuestionListView({collection: questions});
});
	
