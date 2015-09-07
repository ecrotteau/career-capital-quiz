$(function(){
	var Career = Backbone.Model.extend({
		initialize: function(careerJSON) {
			this.title		= careerJSON.title;
			this.link		= careerJSON.link;
			this.slug		= careerJSON.slug;
			this.image		= careerJSON.featuredImageUrl;
			this.summary	= careerJSON.custom_fields.summaryHtml;
			this.nextSteps 	= careerJSON.custom_fields.nextStepsHtml;
			this.notes 		= careerJSON.custom_fields.notesHtml;
			this.quality	= careerJSON.custom_fields.quality;
			this.recommendationLevel 	= careerJSON.custom_fields.overallDoWeGenerallyRecommendThisPath;
			this.directImpactPotential 	= careerJSON.custom_fields.directImpactPotential;
			this.careerCapital			= careerJSON.custom_fields.careerCapital;
			this.skillBuildingPotential	= careerJSON.custom_fields.skillBuildingPotential;
			this.optionValue			= careerJSON.custom_fields.optionValue;
			this.networkingPotential	= careerJSON.custom_fields.networkingPotential;
			this.earningsPotential		= careerJSON.custom_fields.earningsPotential;
			this.advocacyPotential		= careerJSON.custom_fields.advocacyPotential;
			this.easeOfCompetition		= careerJSON.custom_fields.easeOfCompetition;
			this.quantitative 			= careerJSON.custom_fields.requiresQuantitativeSkills;
			this.verbalAndSocial		= careerJSON.custom_fields.requiresVerbalAndSocialSkills;
		}
	});
	
	var CareerList = Backbone.Collection.extend({
		model: Career
	});
	
	// Export to window
	window.app = window.app || {};
	window.app.Career = Career;
	window.app.CareerList = CareerList;
});
