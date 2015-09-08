$(function(){
	var Career = Backbone.Model.extend({
		initialize: function(careerJSON) {
            this.clear();

			this.set("title", careerJSON.title);
			this.set("link", careerJSON.link);
			this.set("slug", careerJSON.slug);
			this.set("image", careerJSON.featuredImageUrl);
			this.set("summary", careerJSON.custom_fields.summaryHtml);
			this.set("nextSteps", careerJSON.custom_fields.nextStepsHtml);
			this.set("notes", careerJSON.custom_fields.notesHtml);
			this.set("quality", careerJSON.custom_fields.quality);
			this.set("recommendationLevel", careerJSON.custom_fields.overallDoWeGenerallyRecommendThisPath);
			this.set("directImpactPotential", careerJSON.custom_fields.directImpactPotential);
			this.set("careerCapital", careerJSON.custom_fields.careerCapital);
			this.set("skillBuildingPotential", careerJSON.custom_fields.skillBuildingPotential);
			this.set("optionValue", careerJSON.custom_fields.optionValue);
			this.set("networkingPotential", careerJSON.custom_fields.networkingPotential);
			this.set("earningsPotential", careerJSON.custom_fields.earningsPotential);
			this.set("advocacyPotential", careerJSON.custom_fields.advocacyPotential);
			this.set("easeOfCompetition", careerJSON.custom_fields.easeOfCompetition);
			this.set("quantitative", careerJSON.custom_fields.requiresQuantitativeSkills);
			this.set("verbalAndSocial", careerJSON.custom_fields.requiresVerbalAndSocialSkills);
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
