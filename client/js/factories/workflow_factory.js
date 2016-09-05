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
					{step: "Include useful snippets such as fake user info or fake gps coordinates to test with"},
					{step: "Break rendered code into snippets and show the code alongside it"}
				]
			}
		];

		factory.get_tasks = function(callback){
				callback(factory.tasks);
		};


	return factory;

});
