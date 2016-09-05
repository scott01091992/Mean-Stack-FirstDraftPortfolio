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
