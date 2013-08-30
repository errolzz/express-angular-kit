'use strict';

/* Controllers */

var ctrls = angular.module('myApp.controllers', []);

ctrls.controller('AppCtrl', ['$scope', 
    function($scope) {
        $scope.title = 'Hello World!'
    }
]);

ctrls.controller('MyCtrl1', ['$scope', 
    function($scope) {

    }
]);

ctrls.controller('MyCtrl2', ['$scope', 
    function($scope) {

    }
]);