myApp.factory('project_factory', function(){
	var factory = {};

	factory.projects = [
		{
			name: "Meridians",
			description: "This project is a Drop and Drop calendar built with the React.js Framework. The user will enter to a homepage, then login to see their calendar. Once they are logged in they will have the month view and day view available to them. In order to add an event, the user will simply drag one of the event circles to the spot on the calendar that the event will start. After that a modal form will pop up for them to fill in the rest of the details. Throughout the project I learned a ton about how React works, how to navigate the DOM, and how to manipulate time objects to build a dynamic calendar. Upcoming features will include a health tracker, location planner, homepage, login-page, validations, performance optimization, and a responsive update as well.",
			time: "3 weeks",
			contributors: "None",
			technologies: [
				"Javascript",
				"React.js",
				"Node.js",
				"Express.js",
				"HTML",
				"CSS",
				"Bootstrap3",
				"JSX",
				"JQuery",
				"Underscore",
				"MongoDB",
				"Mongoose.js",
				"MVC Framework"
			],
			video: "react_calendar.jpg",
			source: "https://github.com/scott01091992/react_calendar",
		},
		{
			name: "Looking for Groups",
			description: "This was first idea that I had for a website. It is a site where you can get matched with other gamers of similar playstyles to yourself. You can create chatrooms, or just choose a game and playstyle to get put into the closest matching room. While working on this as my first project I learned a lot about responsive design and web sockets. The concept I think was most useful while building this application was having functions that check if a user is logged in a session or not, and handling that response correctly.",
			time: "3 weeks",
			contributors: "None",
			technologies: [
				"Javascript",
				"Angular.js",
				"Node.js",
				"Express.js",
				"HTML",
				"CSS",
				"Bootstrap3",
				"Sockets.io",
				"Client-Session",
				"MongoDB",
				"MVC Framework",
				"Mongoose.js"
			],
			video: "lfg.png",
			source: "https://github.com/scott01091992/lookingforgroup_remasterd",
		},
		{
			name: "Code Exchange",
			description: "This was the final assignment from my MEAN Stack training course in the Coding Dojo. The assignment is build an application where users can register, login, create a question, answer the questions, and comment or like the answers. I learned quite a bit about mongoose.js and deep query populations during this assignment. I also learned about mean stack validations.",
			time: "1 weeks",
			contributors: "None",
			technologies: [
				"Javascript",
				"Node.js",
				"Angular.js",
				"Express.js",
				"HTML",
				"CSS",
				"Bootstrap3",
				"MongoDB",
				"MVC Framework",
				"Mongoose.js"
			],
			video: "ce.jpg",
			source: "https://github.com/scott01091992/discussionBoard",
		},
		{
			name: "Paypyr",
			description: "This project was completed at the Coding Dojo. This was my first Full LAMP application. The assignment was to build a book review site and allow for reviews to be created by users. While building this assignment I learned all about codeigniter validations. I also had to become very familiar with SQL queries in PHP",
			time: "2 weeks",
			contributors: "None",
			technologies: [
				"PHP",
				"MySQL",
				"CodeIgniter",
				"Express.js",
				"HTML",
				"CSS",
				"Bootstrap3",
				"MVC Framework"
			],
				video: "pyp.jpg",
			source: "https://github.com/scott01091992/book_reviews",
		}
	];

	factory.get_projects = function(callback){
		callback(factory.projects);
	}

	return factory;
});
