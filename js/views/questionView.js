$(function() {
	var QuestionListView = Backbone.View.extend({
		el: $("#quizContainer"),
		questionTemplate: _.template($("#questionTemplate").html()),

		initialize: function(options) {
			this.visible = this.collection.get(1);		//TODO: or from localStorage
			this.responses = new app.ResponseList();
			//this.responses.fetch();		// Load from localstorage
			this.listener = options.listener;
			this.render();
		},

		events: {
			"change input[type=radio]" : "updateResponses",
			"click .arrow-left.enabled" : "previousQuestion",
			"click .arrow-right.enabled" : "nextQuestion",
		},

		render: function() {
			this.collection.forEach(_.bind(function(question) {
				this.$el.find("#questionListContainer").append(this.questionTemplate(question.toJSON()))
			}, this));

			this.$el.find("#questionListContainer").append(_.template($("#quizCompleteTemplate").html())());

			this.$el.find(this.visible.domId()).show();

			this.setArrowActivity();

			// TODO LATER: add percent completion bar

		},

		//
		// Event Handling
		//

		updateResponses: function(event) {
			var target = $(event.target);
			var choice = target.val();
			var questionId = target.data("question-id");

			var response = this.responses.get(questionId) || this.responses.add({"questionId": questionId});
			response.save({value: choice});
			this.nextQuestion();
		},

		previousQuestion: function() {
			if (this.visible == "results") {
				this.visible = this.collection.last()
				this.swap("#resultsSplash", this.visible.domId());
				this.listener.trigger("careers:hide");

			} else {
				var newVisible = this.collection.at(this.collection.indexOf(this.visible) - 1);
				if (newVisible) {
					this.swap(this.visible.domId(), newVisible.domId());
					this.visible = newVisible;
				} else {
					// TODO: something flashy, or make this case impossible with smart UX
				}
			}
			this.setArrowActivity();
		},

		nextQuestion: function() {
			if (this.proceedToResults()) {
				this.renderResults();
			} else {
				var newVisible = this.collection.at(this.collection.indexOf(this.visible) + 1);
				if (newVisible) {
					this.swap(this.visible.domId(), newVisible.domId());
					this.visible = newVisible;
				} else {
					// TODO: something flashy, or make this case impossible with smart UX
				}

				this.setArrowActivity();
			}
		},
		
		renderResults: function() {
			this.swap(this.visible.domId(), "#resultsSplash");
			this.visible = "results";
			this.setArrowActivity();

			this.listener.trigger("careers:display", this.responses);
		},

		//
		// Helpers
		//

		setArrowActivity: function() {
			this.$el.find(".arrow-left").toggleClass("enabled", this.canGoBack());
			this.$el.find(".arrow-right").toggleClass("enabled", this.canProceed());
		},

		canGoBack: function() {
			return this.collection.indexOf(this.visible) !== 0;
		},

		canProceed: function() {
			return this.responses.questionHasBeenAnswered(this.visible);
		},

		proceedToResults: function() {
			return (this.collection.indexOf(this.visible) == (this.collection.length - 1)) && this.responses.allQuestionsAnswered();
		},
		
		swap: function(selectorToRemove, selectorToShow) {
			this.$el.find(selectorToRemove).fadeOut(_.bind(function() {
				this.$el.find(selectorToShow).fadeIn();
			}, this));
		}
	});

	window.app = window.app || {};
	window.app.QuestionListView = QuestionListView;
});
