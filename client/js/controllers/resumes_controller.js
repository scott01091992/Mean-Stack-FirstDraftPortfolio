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
		}, 1000);
	}

});
