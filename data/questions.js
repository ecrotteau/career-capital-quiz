$(function() {
	window.app = window.app || {};
	window.app.questionData = [
		{
			id: 1,
			body: "Were you good at math, science, or logic when you studied them?",
			subtext: "",
			responseOptions: [
				{
					body: "Yes",
					slug: "yes",
					subtext: "",
					filter: ""
				},
				{
					body: "Not particularly",
					slug: "no",
					subtext: "",
					filter: "lowQuantitative"
				
				},
			]	
		},
		{
			id: 2,
			body: "Are you good at writing and speaking?",
			subtext: "",
			responseOptions: [
				{
					body: "Yes",
					slug: "yes",
					subtext: "",
					filter: ""
				},
				{
					body: "Not particularly",
					slug: "no",
					subtext: "",
					filter: "lowVerbalAndSocial"
				
				},
			]	
		},
		{
			id: 3,
			body: "How comfortable are you working in a highly competitive environment?",
			subtext: "",
			responseOptions: [
				{
					body: "Very",
					slug: "very",
					subtext: "Bring it on!",
					filter: ""
				},
				{
					body: "Not very",
					slug: "not",
					subtext: "",
					filter: "lowCompetition"
				},
			]	
		},
		{
			id: 4,
			body: "How comfortable are you working in a highly competitive field?",
			subtext: "",
			responseOptions: [
				{
					body: "Very",
					slug: "very",
					subtext: "Bring it on!",
					filter: ""
				},
				{
					body: "Somewhat",
					slug: "maybe",
					subtext: "",
					filter: "mediumCompetition"	
				},
				{
					body: "Not very",
					slug: "not",
					subtext: "",
					filter: "lowCompetition"
				},
			]	
		},
		{
			id: 5,
			body: "How uncertain are you about what yo uwant to do in the future?",
			subtext: "",
			responseOptions: [
				{
					body: "Very uncertain",
					slug: "very",
					subtext: "Still figuring things out",
					filter: "highOption"
				},
				{
					body: "Somewhat",
					slug: "maybe",
					subtext: "",
					filter: "mediumOptions"	
				},
				{
					body: "Not very",
					slug: "not",
					subtext: "",
					filter: ""
				},
			]	
		}
	]
});
