/**
* gulpRunner.controller Module
*
* Description
*/
angular.module('gulpRunner.controller', ['gulpRunner.service'])

.controller('indexCtrl', ['$scope', function($scope){
	
}])

.controller('landingCtrl', ['$scope', function($scope){
	$scope.name = "World";
}]);