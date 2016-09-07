myApp.config(function ($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl: '../partials/home.html',
    })
    .when('/Skills',{
      templateUrl: '../partials/skills.html',
    })
    .when('/Resume',{
      templateUrl: '../partials/resume.html',
    })
    .when('/Workflow',{
      templateUrl: '../partials/workflow.html',
    })
    .when('/Projects',{
      templateUrl: '../partials/projects.html',
    })
    .when('/Interview',{
      templateUrl: '../partials/interview.html',
    })
    .otherwise({
      redirectTo: '/home',
    })
});

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

myApp.factory('resume_factory', function(){
	var factory = {};

	factory.template = {
     sections:
       [{
         section_head: "SUMMARY OF QUALIFICATIONS",
         summaries: [
           {
             head: "Web Development Technologies",
             list: ["MEAN: MongoDB, Express.js, Angular.js, Node.js, Sockets.io, Mongoose.js, Bcrypt",
                    "JavaScript Frameworks: JQuery, React.js, Underscore.js, Backbone.js",
                    "LAMP: Linux, Apache, MySQL, PHP, CodeIgniter, Ajax",
                    "Restful Route Architecture, MVC Architecture, Object Oriented Programming",
                    "HTML, CSS, SCSS, Photoshop, MS Word, UML, Git, Bootstrap, AWS, XHTML, JSX, SEO, API’s"]
           },
           {
             head: "Customer Service & Leadership",
             list: ["Tech Support for PTW International, Management role in several restaurants",
                    "Over 15,000 hours of top tier customer service experience"]
           }
         ]
       },
       {
         section_head: "EDUCATION",
         summaries: [
           {
             head: "LAMP AND MEAN Stack programming | Coding Dojo",
             date: "May 22nd 2016",
             list: ["Trained with job placement in mind and learning all of the  skill required to be a self-sufficient web developer",
              "Covering both front & back end programming with a focus on understanding best practices for each",
              "Build applications from concept to implementation ensuring that the concept and wireframe are clearly understood before proceeding to development",
              "Tested on building full feature applications from wireframe to deployment in under 5 hours. Passed with Blackbelt rating (highest possible score)."]
           },
           {
             head: "Customer Service & Leadership",
             date: "67 credits earned",
             list: ["Member of an elite National Science Foundation program, (STEM to Stern) for high-potential Science, Technology, Engineering, and Mathematics students",
             "Studied Computer Networking, Information Technology, Windows Servers and Troubleshooting"]
           }
         ]
       },
       {
         section_head: "EXPERIENCE",
         summaries: [
           {
             head: "Independent Driver",
             company: " | Instacart",
             date: "August 2012 - Present",
             list: ["Deliver groceries within 1 hour timeframes to clients in Seattle and Bellevue",
                    "Work 60+ hour weeks independently, responsible for each contract that is accepted"]
           },
           {
             head: "Assistant Manager",
             company: " | Pizza Hut",
             date: "February 2012 – August 2012",
             list: ["Promoted to assistant manager within the second month of employment",
                    "Manage operations 45+ hours per week, discuss and implement policies with GM"]
           }
         ]
       }]
	  };

	factory.get_template = function(callback){
		callback(factory.template);
	};

	return factory;
});

myApp.factory('skill_factory', function(){
	var factory = {};

	factory.skills = {
		lamp:{skill: 'LAMP',
		 description: 'LAMP, commonly referred to as the LAMP Stack, is a widely used open source web platform. The acronym LAMP stands for Linux Apache MySQL and PHP/Python/Perl. It is estimated that the LAMP stack accounts for upwards of 80% of the sites connected to the web.', technologies: ["PHP", "MySQL", "CodeIgniter", "HTML5", "CSS3", "JavaScript", "Ajax"],
			 skill_type: "Technologies", img: "lamp.png", title: "What is LAMP?" },
		mean:{skill: 'MEAN', description: 'MEAN is a relatively new open source software stack built in JavaScript. MEAN is the acronym used to describe the technologies; MongoDB, Express.js, Angular.js and Node.js. Together these technologies become a powerful web application software bundle. Angular is a JavaScript framework, built with single page applications and speed in mind. Express.js handles requests to and from the server. MongoDB is a NoSQL database that is usually paired with the Mongoose.js framework to make queries nice and strightforward. Lastly you have Node.js which is the glue that holds the stack together. Node is a server-side, event driven, JavaScript environment used to host the webpage.', technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Angular.js", "Mongoose.js", "Sockets.io", "HTML5", "CSS3"], skill_type: "Technologies", img: "mean.png", title: "What is MEAN?"},
		mvc:{skill: 'Architectures', description: 'Development Architectures are cruically important in the development cycle. MVC, or Model View Controller Architecture is used to separate a clients rendered content from server-side processing and requests. This not only keeps code modular, but also improves security. Agile methodology is also an important development architecture, this practice is all about keeping communications open during development and allowing for changes to happen fluidly throughout the development cycle. While having structure is important, keeping a workflow consistant is also important. Version control systems, such as Git are important to understand in order to smoothly transition changes to a project.', technologies: ["MVC", "Restful", "Agile", "Components", "Mobile-App", "Git", "Version Control"], skill_type: "Methodologies", img: "agile.png", title: "Are Development Architectures Important?"},
		networking:{skill: 'Front-End', description: 'Answering design questions in relationship to the user experience is what front end development is all about. Using HTML, CSS, and JavaScript, the front-end is what the client is seeing. Understanding concepts like page-layouts, transitions, animations, color-theory, leading lines, and white-space mangement are all important ideas to grasp on the front end.', technologies: ["HTML5", "CSS3", "Photoshop", "Wireframing", "UX/UI", "RWD", "CSS Animations", "JavaScript"], skill_type: "Designer Essentials", img: "design.png", title: "The Front-End.. Designers"},
		troubleshooting:{skill: 'Back-End', description: 'Back-End Development is all about speed, efficency and data management. Getting data to users with speed and security in mind, concepts like web security, database configuration, data type manipulations, and complex problem solving are crucial role in a development cycle. Scalability ties in with the idea of keeping things running quickly. Ensuring that your data is being handled effiecently will allow for growth without redesigning code as an application attracts more users.', technologies: ["JavaScript", "PHP", "Underscore.js", "NoSQL", "SQL", "JSX"], skill_type: "Syntaxs'", img: "engineer.png", title: "Where is the Data?"},
		customer_service:{skill: 'Frameworks', description: "There are all kinds of development frameworks to speed up the development process. They can accomplish anything from solving a specific problem, to providing file structure to your code. Knowing which framework is right for the job is a key factor when starting up a project.", technologies: ["React.js", "Bootstrap", "SCSS", "Moment.js", "Sockets.io", "CodeIgniter", "OOP"], skill_type: "Frameworks", img: "react.png", title: "So Many Frameworks!"}
	};

	factory.get_skills = function(callback){
		callback(factory.skills);
	};

	return factory;
});

myApp.factory('sub_catagory_factory', function(){
	var factory = {};

	factory.pages = {
		skills: {image: 'skills.jpg', catagory: 'Skills'},
		resume: {image: 'resume.jpg', catagory: 'Resume'},
		process: {image: 'code.jpg', catagory: 'Workflow'},
		projects: {image: 'projects.jpg', catagory: 'Projects'}
	};

	factory.main_img = {
		main_img: 'brandon.jpg'
	};

	factory.get_main_img = function(callback){
		callback(factory.main_img);
	};

	factory.get_sub_catagories = function(callback){
			callback(factory.pages);
	};

	return factory;
});

myApp.factory('workflow_factory', function(){

	var factory = {};

		factory.tasks = [
			{
				name: "Brainstorming",
				img: "brainstorm.png",
				description: "During this phase we are determining what the projects goals are and understanding how ambious the project is upfront.",
				steps: [
					{step: "What will the app do?"},
					{step: "Who is the target audience?"},
					{step: "What are the must have features?"},
					{step: "what are the optional features?"},
					{step: "How much time will the project take?"},
					{step: "Is this the best possible idea?"}
				]
			},
			{
				name: "Research",
				img: "research.png",
				description: "Here we are finding out more about the target audience, what kinds of assets will speak to that audience, and what do we need to know to get started.",
				steps: [
					{step: "Demographic Research"},
					{step: "Surveys"},
					{step: "Questionaires"},
					{step: "Finances"},
					{step: "Content information"},
					{step: "Any additional information"}
				]
			},
			{
				name: "Database Schema",
				img: "database.png",
				description: "Now that we know what the project is, and have some information on what it will accomplish; it is time to layout the data.",
				steps: [
					{step: "List out what data is needed"},
					{step: "Break data down into tables"},
					{step: "Map relationships between tables"},
					{step: "Assign data-types"},
					{step: "Review the schema"}
				]
			},
			{
				name: "UML Models",
				img: "uml.png",
				description: "During this phase we are writing out which objects will be created. Then we need to assign properties and functions to the objects. This will give us a better understanding of the relationships between components in the application",
				steps: [
					{step: "List the objects"},
					{step: "Map the relationships between the objects"},
					{step: "Fill object with properties"},
					{step: "Assign data-types"},
					{step: "Fill object with methods"}
				]
			},
			{
				name: "Wireframing",
				img: "wireframe.png",
				description: "Create wireframe of the application. Layout each of the pages focusing on the general features of each page. Details are less important than layout and functionality during this phase.",
				steps: [
					{step: "Plan out pages and where they take you"},
					{step: "Map out where content will be placed and how the general layout will look"},
					{step: "Work out how a typical user will navigate the site and make sure it feels right"},
					{step: "This is where UX/UI design comes into play"},
					{step: "Make review each page making sure nothing has been excluded"}
				]
			},
			{
				name: "Assets",
				img: "assets.png",
				description: "Now it is time to fill in the blanks of the wireframe. Gather and create all the necessary assets to prepare for the final stage of design.",
				steps: [
					{step: "Choose a color scheme"},
					{step: "Pick fonts"},
					{step: "Gather photos and videos"},
					{step: "Create logos or other assets"},
					{step: "Check file types"},
					{step: "Review each asset for quality"}
				]
			},
			{
				name: "Photoshop",
				img: "photoshop.png",
				description: "Get deep into the design of the website with photoshop. This is where you can bring togther the wireframe and the assets to really get creative.",
				steps: [
					{step: "Build the main page"},
					{step: "Be creative"},
					{step: "Consider the mood, audience, and feel of each page"},
					{step: "Edit assets to fill out the page as needed"},
					{step: "Make sure the entire user experience is considered before moving on"}
				]
			},
			{
				name: "HTML5",
				img: "html.png",
				description: "Build out the HTML of the site. The final HTML should be ordered in an organized fashion and have the CSS and dynamic content considered.",
				steps: [
					{step: "Code the HTML"},
					{step: "Look for patterns or dynamic content in the HTML and break it into repeatable chunks"},
					{step: "Make sure HTML5 is considered"},
					{step: "Fill in Document Tags"},
					{step: "Comment Code"}
				]
			},
			{
				name: "SEO",
				img: "seo.png",
				description: "Now that there is HTML in place we can check take a second to consider search engine optimization. Use industry guidelines and tools to make sure it is up to standards.",
				steps: [
					{step: "Set up google analytics"},
					{step: "Choose a domain name"},
					{step: "Google Search Console"},
					{step: "Edit and add HTML Tags where needed"},
					{step: "Robots.txt"},
					{step: "Alt Img tags"}
				]
			},
			{
				name: "SCSS/Compass",
				img: "scss.png",
				description: "Time to add in some CSS/SCSS. Remember that simple is better and SCSS variables are your friends.",
				steps: [
					{step: "Style pages"},
					{step: "create variables and loops"},
					{step: "Modularize code"},
					{step: "Use requires to make a single request"},
					{step: "Use sprites to make less requests for images"},
					{step: "Comment Code"}
				]
			},
			{
				name: "RWD",
				img: "rwd.png",
				description: "Add media queries to allow for views on other devices. Make sure not to use too many breakpoints",
				steps: [
					{step: "Edit SCSS for Desktops"},
					{step: "Create Laptops breakpoint"},
					{step: "Create Tablets breakpoint"},
					{step: "Create Mobile breakpoint"},
					{step: "Comment Code"},
					{step: "List all elements effected by RWD"}
				]
			},
			{
				name: "Animations",
				img: "animation.png",
				description: "Time to get creative with animations. It is important to use animations to direct the user experience. Animations can be vital to communicating with the user. Make sure the animations have life to them, when animations behave in abstract ways it can be disorienting to the user.",
				steps: [
					{step: "Build Animations out separately"},
					{step: "Consider the User Experience"},
					{step: "Implement the animation to the code"},
					{step: "Review the animations for quality"},
					{step: "Comment Code"}
				]
			},
			{
				name: "MVC",
				img: "mvc.png",
				description: "Build out the framework on the front end. This will be adding the framework for the controller and model, then attaching the already created partials as the views.",
				steps: [
					{step: "Build out the file structure"},
					{step: "Create model view controller"},
					{step: "Connect the model view controller"},
					{step: "Test serving out a view"},
					{step: "Comment code"}
				]
			},
			{
				name: "Database",
				img: "schema.png",
				description: "Create the database and get the schemas in place. Make sure that all of the data is there, it can be difficult to make database changes later on in the cycle.",
				steps: [
					{step: "Draw out the schema"},
					{step: "Create each schema in code"},
					{step: "Assign Datatypes"},
					{step: "Add relationships to the schemas"},
					{step: "Double check for ID's, datatypes, date_created, date_updated"}
				]
			},
			{
				name: "Requests",
				img: "requests.png",
				description: "Now that the database is set up, we need to handle incoming requests to the server. Each request should have a function that is called to handle it.",
				steps: [
					{step: "Set up a routes file"},
					{step: "Write out GET POST DELETE PATCH requests"},
					{step: "Write functions that will be called on each request"},
					{step: "Test the requests to make sure each is working"},
					{step: "Follow REST"},
					{step: "Comment Code"}
				]
			},
			{
				name: "Validations",
				img: "validations.png",
				description: "Catch Errors from user and display what problems they might be facing. Form validations are the most common validations, but there are other validations such as letting the user know they must log in to access content will need to be handled.",
				steps: [
					{step: "Create Form Validations"},
					{step: "Create validation errors for the user"},
					{step: "Create validation errors for the server"},
					{step: "Test each case and ensure all validations are working"},
					{step: "Comment Code"}
				]
			},
			{
				name: "Web Security",
				img: "websecurity.png",
				description: "Now we must ensure we are protected against common attacks. This is just ensuring sensitive information is encrypted and that only the indended incoming data is read by the server.",
				steps: [
					{step: "Minimize the ammount of information is served"},
					{step: "Encrypt data where needed"},
					{step: "Escape incoming data"},
					{step: "Go through possible attacks and take preventative action"},
					{step: "Trace data flow with a map looking for weaknesses"}
				]
			},
			{
				name: "Web Performance",
				img: "webperformance.png",
				description: "Now the site should feel more or less finished, but there is still work to be done. Lets make the site faster.",
				steps: [
					{step: "Minimize files"},
					{step: "CSS in head Javascript after body"},
					{step: "Concat files"},
					{step: "Optimize image sizes"},
					{step: "Remove as much overhead as possible"},
					{step: "Test alternate browser performance"}
				]
			},
			{
				name: "Test Automation",
				img: "testautomation.png",
				description: "From here on out there is a lot of testing to be done with any changes to the site. Build testing software to streamline testing new features.",
				steps: [
					{step: "Write out each of the tests needed to be built"},
					{step: "Build out dummy profiles"},
					{step: "For each test, write out the steps for the test"},
					{step: "List the target elements that need to be accessed for the test"},
					{step: "Build each test and run it in a virtual environment"}
				]
			},
			{
				name: "Cross-Browser Optimization",
				img: "crossbrowser.png",
				description: "Now the site might be good for a majority of your users, but we need to work on getting this working for everyone.",
				steps: [
					{step: "Add webkits to css"},
					{step: "Build a Mobile App if necessary"},
					{step: "Use Modernizer to detect the users hardware/software"},
					{step: "Ensure functionality on all major browsers"},
					{step: "Run test automation in each browser type"},
					{step: "List any bugs and fix them"}
				]
			},
			{
				name: "Web Accessibility",
				img: "accessibility.png",
				description: "Now the site works for a majority of users, lets bring in special cases as well.",
				steps: [
					{step: "Is the site blind user friendly?"},
					{step: "Is the site deaf user friendly?"},
					{step: "Can color deficient users navigate well?"},
					{step: "Can the site be traversed with a keyboard?"},
					{step: "Check the accessibility guidelines"}
				]
			},
			{
				name: "Bux Fixes",
				img: "bugfix.png",
				description: "This is the final step before the code is deployed. Make sure you are happy with what you have built, and check for any bugs or changes that need to be handled.",
				steps: [
					{step: "Click through all possible user paths"},
					{step: "Stress all inputs with all data types"},
					{step: "Stress test server to handle multiple requests"},
					{step: "Fix all major bugs"},
					{step: "Finalize code, make last changes now"},
					{step: "Document minor bugs for later fixes"}
				]
			},
			{
				name: "Deployment",
				img: "deployment.png",
				description: "Put the code in the cloud. Time to make the site public and visible.",
				steps: [
					{step: "Choose deployment platform"},
					{step: "Deploy the code to the cloud"},
					{step: "Route to the site from domain name"},
					{step: "Test for successful deployment"},
					{step: "Click through the site to ensure it is what you had intended"},
					{step: "Add content if necessary"}
				]
			},
			{
				name: "Documentation",
				img: "document.png",
				description: "Well the coding is done, but its time to document everything possible. It's still fresh in your mind, so take advantage of that.",
				steps: [
					{step: "Set up a wiki"},
					{step: "Document everything about site"},
					{step: "Make sure everything that could be relevant is documented"},
					{step: "Include useful snippets"},
					{step: "Break rendered code into snippets and show the code alongside it"}
				]
			}
		];

		factory.get_tasks = function(callback){
				callback(factory.tasks);
		};


	return factory;

});

myApp.controller('projects_controller', function($location, $timeout, $scope, project_factory){

  project_factory.get_projects(function(callback){
    $scope.projects = callback;
  });

  $scope.open = function(where){
		var myEl = angular.element( document.querySelector( '#projects_page' ) );
		myEl.removeClass('projects_animate_in');
		myEl.addClass('projects_animate_out');
		$timeout(function(){
			$location.path('/'+where);
		}, 3000);
	}

});

myApp.controller('resumes_controller', function($location, $timeout, $scope, resume_factory){

  resume_factory.get_template(function(template){
    $scope.sections = template;
  })

  $scope.open = function(where){
		var myEl = angular.element( document.querySelector( '#resume_page' ) );
		myEl.removeClass('resume_animate_in');
		myEl.addClass('resume_animate_out');
		$timeout(function(){
			$location.path('/'+where);
		}, 3000);
	}

});

myApp.controller('skills_controller', function($location, $timeout, $scope, skill_factory){

	skill_factory.get_skills(function(callback){
		$scope.skills = callback;
	});

	$scope.scrollTo = function(id){
		timer = document.getElementById(id).offsetTop/2;
		function scrollTo(element, to, duration) {
	    if (duration <= 0) return;
	    var difference = to - element.scrollTop;
	    var perTick = difference / duration * 20;
	    setTimeout(function() {
	        element.scrollTop = element.scrollTop + perTick;
	        if (element.scrollTop === to) return;
	        scrollTo(element, to, duration - 10);
	    }, 10);
		}
		scrollTo(document.body, document.getElementById(id).offsetTop, timer );
	}

	$scope.backTop = function(){
		console.log('working');
		function scrollTo(element, to, duration) {
	    if (duration <= 0) return;
	    var difference = to - element.scrollTop;
	    var perTick = difference / duration * 10;
	    setTimeout(function() {
	        element.scrollTop = element.scrollTop + perTick;
	        if (element.scrollTop === to) return;
	        scrollTo(element, to, duration - 10);
	    }, 10);
		}
		scrollTo(document.body, 0, 1000 );
	}

	$scope.open = function(where){
		var myEl = angular.element( document.querySelector( '#skills_page' ) );
		myEl.removeClass('skills_animate_in');
		myEl.addClass('skills_animate_out');
		$timeout(function(){
			$location.path('/'+where);
		}, 3000);
	}

});

myApp.controller('sub_catagories_controller', function($location, $rootScope, $timeout, $scope, sub_catagory_factory){

	sub_catagory_factory.get_sub_catagories(function(callback){
		$scope.pages = callback;
	});

	sub_catagory_factory.get_main_img(function(callback){
		$scope.main_img = callback;
	});

	$scope.open = function(where){
		var myEl = angular.element( document.querySelector( '#welcome_page' ) );
		myEl.removeClass('home_animate_in');
		myEl.addClass('home_animate_out');
		$timeout(function(){
			$location.path('/'+where);
		}, 3000);
	}


});

myApp.controller('workflow_controller', function($location, $timeout, $scope, workflow_factory){

	workflow_factory.get_tasks(function(callback){
		$scope.tasks = callback;
	});

	$scope.open = function(where){
		var myEl = angular.element( document.querySelector( '#workflow_page' ) );
		myEl.removeClass('workflow_animate_in');
		myEl.addClass('workflow_animate_out');
		$timeout(function(){
			$location.path('/'+where);
		}, 3000);
	}

});
