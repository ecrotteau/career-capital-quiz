$(function() {
	var CareerListView = Backbone.View.extend({
		el: $("#resultsContainer"),
		careerTemplate: _.template($("#careerTemplate").html()),

		initialize: function(options) {
			this.render();
			this.listener = options.listener;
			this.listener.on("careers:display", _.bind(this.filterCareersByResults, this));
		},

		events: {
		},

		render: function() {
			this.collection.forEach(_.bind(function(career) {
				this.$el.append(this.careerTemplate(career.toJSON()))
			}, this));
		},

		filterCareersByResults: function(results) {
			var filters = results.getFiltersFromQuestions();
			console.log(filters)
			
			// first sort by impact, then filter and possibly re-sort

			this.showFilteredCareers(this.collection);
		},
		
		showFilteredCareers: function(careers) {
			var visibleSelector = careers.map(function(career) { return career.domId() }).join(", ");
			this.$el.find(".careerContainer").hide(_.bind(function() {
				this.$el.find(visibleSelector).show();
			}, this));
		},

		//
		// Event Handling
		//

		//
		// Helpers
		//


	});

	window.app = window.app || {};
	window.app.CareerListView = CareerListView;
});
