'use strict';

var MyApp = angular.module('MyApp', ['nvd3ChartDirectives']);
'use strict';

MyApp.controller('GraphController', ['GraphService', function (GraphService) {
    void 0;

    var vm = this;

    vm.getInfo = function () {
        void 0;
        GraphService.getInfo().then(function (response) {
            var data = response.data;
            var arr = [];
            void 0;
            for (var i = 0; i <= data.length - 1; i++) {
                void 0;
                var time = data[i][0].split("-")[0];
                void 0;
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
'use strict';

MyApp.service('GraphService', function ($http) {
    void 0;

    var sv = this;

    sv.getInfo = function () {
        return $http({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
        }).then(function (response) {
            void 0;
            sv.graphData = response.data;
            return response.data;
        });
    }; // end getInfo
});