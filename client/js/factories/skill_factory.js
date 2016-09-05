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
