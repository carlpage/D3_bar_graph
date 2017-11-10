'use strict';

var MyApp = angular.module('MyApp', []);
'use strict';

MyApp.controller('GraphController', ['GraphService', function (GraphService) {
    console.log("in controller");

    var vm = this;

    vm.getInfo = function () {
        console.log("in getInfo");
        GraphService.getInfo().then(function (response) {
            console.log(response);
            vm.graphData = GraphService.graphData;
        });
    };

    vm.getInfo();
}]); // end controller
'use strict';

MyApp.service('GraphService', function ($http) {
    console.log("in service");

    var sv = this;

    sv.getInfo = function () {
        return $http({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
        }).then(function (response) {
            console.log('in service, data: ', response.data);
            sv.graphData = response.data;
            return response.data;
        });
    }; // end getInfo
});