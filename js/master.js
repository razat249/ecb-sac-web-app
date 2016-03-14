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

	  	$urlRouterProvider.otherwise('home');
	}]);

}());