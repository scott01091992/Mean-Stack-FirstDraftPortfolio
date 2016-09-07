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
		}, 1000);
	}

});
