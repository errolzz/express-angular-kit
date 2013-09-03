'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', []);


controllers.controller('AppCtrl', ['$scope', 'version',
    function($scope, version) {
        $scope.title = 'Hello World!',
        $scope.version = version
    }
]);

controllers.controller('MyCtrl1', ['$scope', 
    function($scope) {

    }
]);

controllers.controller('MyCtrl2', ['$scope', 
    function($scope) {

    }
]);