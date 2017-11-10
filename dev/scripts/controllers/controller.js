MyApp.controller('GraphController', ['GraphService', function (GraphService) {
    console.log("in controller");

    const vm = this;

    vm.getInfo = function () {
        console.log("in getInfo");
        GraphService.getInfo().then(function (response) {
            console.log(response);
            vm.graphData = GraphService.graphData;

        });
    };

    vm.getInfo();


}]); // end controller