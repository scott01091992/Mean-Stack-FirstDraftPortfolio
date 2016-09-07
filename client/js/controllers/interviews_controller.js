myApp.controller('interviews_controller', function($location, $rootScope, $timeout, $scope, interview_factory){

  interview_factory.get_questions(function(callback){
    $scope.questions = callback;
  });

	$scope.open = function(where){
		var myEl = angular.element( document.querySelector( '#interview_page' ) );
		myEl.removeClass('interview_animate_in');
		myEl.addClass('interview_animate_out');
		$timeout(function(){
			$location.path('/'+where);
		}, 1000);
	}


});
