MyApp.controller('GraphController', ['GraphService', function (GraphService) {
    console.log("in controller");

    const vm = this;

    vm.getInfo = () => {
        console.log("in getInfo");
        GraphService.getInfo().then( (response) => {
            const data = response.data;
            for(let i = 0; i <= data.length - 1; i++) {
                let unixTime = Date.parse(data[i][0]).getTime() / 1000;
                data[i].shift();
                data[i].unshift(unixTime);
            }
            console.log(data);
            const input = {
                key: GraphService.graphData.name,
                values: data
            };
            vm.graphData = input;

        });
    };

    vm.xFunction = () => {

    };

}]); // end controller