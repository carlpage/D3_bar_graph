MyApp.service('GraphService', function ($http) {
    console.log("in service");

    const sv = this;

    sv.getInfo = () => {
        return $http({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
        }).then( (response) => {
            console.log('in service, data: ', response.data);
            sv.graphData = response.data;
            return response.data;
        });
    }; // end getInfo

});