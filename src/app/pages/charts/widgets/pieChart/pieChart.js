'use strict';

app.controller('pieChartCtrl', ['$scope', '$timeout', '$element', function($scope, $timeout, $element) {
  var id = $element[0].getAttribute('id');
  var pieChart = AmCharts.makeChart(id, {
    type: "pie",
    startDuration: 0,
    theme: "blur",
    addClassNames: true,
    legend: {
      position: "right",
      marginRight: 100,
      autoMargins: false
    },
    innerRadius: "40%",
    defs: {
      filter: [
        {
          id: "shadow",
          width: "200%",
          height: "200%",
          feOffset: {
            result: "offOut",
            in: "SourceAlpha",
            dx: 0,
            dy: 0
          },
          feGaussianBlur: {
            result: "blurOut",
            in: "offOut",
            stdDeviation: 5
          },
          feBlend: {
            in: "SourceGraphic",
            in2: "blurOut",
            mode: "normal"
          }
        }
      ]
    },
    dataProvider: [
      {
        country: "Lithuania",
        litres: 501.9
      },
      {
        country: "Czech Republic",
        litres: 301.9
      },
      {
        country: "Ireland",
        litres: 201.1
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      },
      {
        country: "UK",
        litres: 99
      },
      {
        country: "Belgium",
        litres: 60
      }
    ],
    valueField: "litres",
    titleField: "country",
    export: {
      enabled: true
    },
    creditsPosition: "bottom-left",

    autoMargins: false,
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    pullOutRadius: 0,
    pathToImages: "release/img/"
  });

  pieChart.addListener("init", handleInit);

  pieChart.addListener("rollOverSlice", function (e) {
    handleRollOver(e);
  });

  function handleInit() {
    pieChart.legend.addListener("rollOverItem", handleRollOver);
  }

  function handleRollOver(e) {
    var wedge = e.dataItem.wedge.node;
    wedge.parentNode.appendChild(wedge);
  }
}]);