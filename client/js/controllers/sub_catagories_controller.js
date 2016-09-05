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
