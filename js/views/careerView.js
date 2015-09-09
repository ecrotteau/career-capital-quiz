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

		renderCareers: function(careers) {
			careers.forEach(_.bind(function(career) {
				this.$el.append(this.careerTemplate(career.toJSON()))
			}, this));
		},

		filterCareersByResults: function(results) {
			this.$el.empty();
			var filters = results.getFiltersFromQuestions();

			this.collection.resetEffectiveCareerCapital();
			var collectionToShow = this.collection;

			_.forEach(filters, _.bind(function(filter) {
				collectionToShow = this.collection[filter](collectionToShow);
			}, this));

			collectionToShow = _.sortBy(collectionToShow, function(career) {
				console.log(career.get("effectiveCareerCapital"))
				return -(career.get("effectiveCareerCapital"));
			});

			console.log(collectionToShow)

			this.renderCareers(collectionToShow);
		}

	});

	window.app = window.app || {};
	window.app.CareerListView = CareerListView;
});
