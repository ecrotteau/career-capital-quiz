$(function(){
	var Career = Backbone.Model.extend({
		initialize: function(careerJSON) {
			this.clear();		// don't use the unprocessed JSON

			this.set("id", careerJSON.ID);
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
			this.set("keyFacts", careerJSON.custom_fields.skillType.keyFactsOnFit);
		}
	});
	
	var CareerList = Backbone.Collection.extend({
		model: Career,

		resetEffectiveCareerCapital: function() {
			this.forEach(function(career) { career.set("effectiveCareerCapital", career.get("careerCapital"))});
		},

		//
		// Filters
		//

		lowQuantitative: function(careers) {
			return careers.filter(function(career) { return career.get("quantitative") < 4 });
		},

		lowVerbalAndSocial: function(careers) {
			return careers.filter(function(career) { return career.get("verbalAndSocial") < 4 });
		},

		mediumCompetition: function(careers) {
			return careers.filter(function(career) { return career.get("easeOfCompetition") > 1 });
		},

		lowCompetition: function(careers) {
			return careers.filter(function(career) { return career.get("easeOfCompetition") > 2 });
		},

		highOption: function(careers) {
			careers.forEach(function(career) { career.set("effectiveCareerCapital", career.get("careerCapital") + 2*career.get("optionValue"))});
			return careers;
		},

		mediumOptions: function(careers) {
			careers.forEach(function(career) { 
				career.set("effectiveCareerCapital", career.get("careerCapital") + career.get("optionValue"));
				
				});
			return careers;
		}
	});

	// Export to window
	window.app = window.app || {};
	window.app.Career = Career;
	window.app.CareerList = CareerList;
});
