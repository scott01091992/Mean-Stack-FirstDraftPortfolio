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
		}, 1000);
	}

});
