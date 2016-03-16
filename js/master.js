(function(){

	var app = angular.module('sac',['ui.router']);


	societies = [
		{
			name : "Sci-Tech Society"
		},
		{
			name : "Sports and Games Society"
		},
		{
			name : "Arts &Literary Society"
		},
		{
			name : "Vocational Society"
		},
		{
			name : "Student & Social Welfare"
		}
	];

	app.controller('HeaderCtrl', ['$scope', function($scope){
	}]);

	app.controller('HomeCtrl',['$scope', function($scope){
		$scope.societies = societies;
	}]);

	app.controller('LoginCtrl',['$scope', function($scope){
		
	}]);

	app.controller('GalleryCtrl',['$scope', function($scope){
		$scope.pupu = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/office.jpg"];
	}]);


// routing
	app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

	    $stateProvider
	        .state('home', {
		        url: '/home',
		      	templateUrl: '/home.html',
		      	controller: 'HomeCtrl'
	    	})

	    	.state('login', {
		        url: '/login',
		      	templateUrl: '/login.html',
		      	controller: 'LoginCtrl'
	    	})

	    	.state('gallery', {
		        url: '/gallery',
		      	templateUrl: '/gallery.html',
		      	controller: 'GalleryCtrl'
	    	})

	  	$urlRouterProvider.otherwise('home');
	}]);

}());