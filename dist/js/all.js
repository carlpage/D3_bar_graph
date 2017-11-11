'use strict';

var MyApp = angular.module('MyApp', ['nvd3ChartDirectives']);
'use strict';

MyApp.controller('GraphController', ['GraphService', function (GraphService) {
    console.log("in controller");

    var vm = this;

    vm.getInfo = function () {
        console.log("in getInfo");
        GraphService.getInfo().then(function (response) {
            var data = response.data;
            for (var i = 0; i <= data.length - 1; i++) {
                var unixTime = Date.parse(data[i][0]).getTime() / 1000;
                data[i].shift();
                data[i].unshift(unixTime);
            }
            console.log(data);
            var input = {
                key: GraphService.graphData.name,
                values: data
            };
            vm.graphData = input;
        });
    };

    vm.xFunction = function () {};
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