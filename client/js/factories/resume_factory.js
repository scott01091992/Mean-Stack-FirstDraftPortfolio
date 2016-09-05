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
