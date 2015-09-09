$(function() {
	var CareerListView = Backbone.View.extend({
		el: $("#resultsContainer"),
		careerTemplate: _.template($("#careerTemplate").html()),

		initialize: function(options) {
			this.render();
			this.listener = options.listener;
			this.listener.on("careers:display", _.bind(this.filterCareersByResults, this));
			this.listener.on("careers:hide", _.bind(function() {
				this.emptyResults();
			}, this));
		},

		renderCareers: function(careers) {
			careers.forEach(_.bind(function(career) {
				this.$el.append(this.careerTemplate(career.toJSON()))
			}, this));
			
			this.$el.find(".careerContainer").fadeIn(500);
		},

		filterCareersByResults: function(results) {
			this.emptyResults();
			var filters = results.getFiltersFromQuestions();

			this.collection.resetEffectiveCareerCapital();
			var collectionToShow = this.collection;

			if (filters.length > 0) {
				_.forEach(filters, _.bind(function(filter) {
					collectionToShow = this.collection[filter](collectionToShow);
				}, this));
			} else {
				collectionToShow = collectionToShow.models;
			}

			collectionToShow = _.sortBy(collectionToShow, function(career) {
				return -(career.get("effectiveCareerCapital"));
			});

			this.renderCareers(_.first(collectionToShow,5));
		},

		emptyResults: function() {
			this.$el.find(".careerContainer").fadeOut(500, _.bind(function() {
				this.$el.empty();
			}, this));
		}

	});

	window.app = window.app || {};
	window.app.CareerListView = CareerListView;
});
