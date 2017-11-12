'use strict';

var MyApp = angular.module('MyApp', ['nvd3ChartDirectives']);
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
'use strict';

MyApp.controller('GraphController', ['GraphService', function (GraphService) {
    console.log("in controller");

    var vm = this;

    vm.getInfo = function () {
        console.log("in getInfo");
        GraphService.getInfo().then(function (response) {
            var data = response.data;
            var arr = [];
            console.log(data);
            for (var i = 0; i <= data.length - 1; i++) {
                console.log(data[i][0]);
                var time = data[i][0].split("-")[0];
                data[i].shift();
                data[i].unshift(time);
            } // end loop
            var input = [{
                key: GraphService.graphData.name,
                values: data
            }];
            vm.graphData = input;
        });
    }; // end getInfo
}]); // end controller