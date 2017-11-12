MyApp.controller('GraphController', ['GraphService', function (GraphService) {
    console.log("in controller");

    const vm = this;

    vm.getInfo = () => {
        console.log("in getInfo");
        GraphService.getInfo().then( (response) => {
            const data = response.data;
            let arr = [];
            console.log(data);
            for (let i = 0; i <= data.length - 1; i++) {
                let time = data[i][0].split("-")[0];
                data[i].shift();
                data[i].unshift(time);
            } // end loop
            let input = [{
                key: GraphService.graphData.name,
                values: data
            }];
            vm.graphData = input;
        });
    }; // end getInfo

}]); // end controller