/**
* gulpRunner Module
*
* Description
*/
angular.module('gulpRunner', ['ui.router', 'gulpRunner.controller'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state('landing', {
			url : '/landing',
			templateUrl : '../../partials/landing.html',
			controller : 'landingCtrl'
		});

	$urlRouterProvider
		.otherwise('/landing');

}]);