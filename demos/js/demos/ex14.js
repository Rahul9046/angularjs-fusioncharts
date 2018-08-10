(function () {
  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/demos/ex14', {
      templateUrl: 'views/ex14.html',
      controller: 'ex14Controller'
    });
  }]);




  app.controller('ex14Controller', function ($scope, $rootScope) {
    $rootScope.demoId = 'ex14';
    var vm = this;
    $rootScope.currentTitle = 'World Map';        



    var DataSource = dataSource = {
      "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        "labelsepchar": ": ",
        "entityFillHoverColor": "#FFF9C4",
        "theme": "fusion"
      },
      "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [
    
          {
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
          },
          {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
          },
          {
            "minvalue": "2.0",
            "maxvalue": "3.0",
            "color": "#E65100"
          }
        ]
      },
      "data": [{
          "id": "NA",
          "value": ".82",
          "showLabel": "1"
          
        },
        {
          "id": "SA",
          "value": "2.04",
          "showLabel": "1"
        },
        {
          "id": "AS",
          "value": "1.78",
          "showLabel": "1"
          
        },
        {
          "id": "EU",
          "value": ".40",
          "showLabel": "1"
        },
        {
          "id": "AF",
          "value": "2.58",
          "showLabel": "1"
        },
        {
          "id": "AU",
          "value": "1.30",
          "showLabel": "1"
        }
      ]
    };
    
    $scope.myDataSource = DataSource;

    
  });

}());