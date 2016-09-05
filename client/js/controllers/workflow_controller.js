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
