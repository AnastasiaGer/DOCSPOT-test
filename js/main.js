
var fruitSales = [	  
  {"date":1559597400000,"invoiceId":101,"item":"Grapefruit","price":0.68,"units":16,"store":"Casa Fruta"},
  {"date":1559597400000,"invoiceId":101,"item":"Orange","price":0.53,"units":21,"store":"Casa Fruta"},
  {"date":1559597400000,"invoiceId":101,"item":"Mango","price":0.73,"units":23,"store":"Casa Fruta"},
  {"date":1560288600000,"invoiceId":102,"item":"Orange","price":0.86,"units":10, "store":"Cornucopia"},
  {"date":1560288600000,"invoiceId":102,"item":"Banana","price":0.09,"units":119, "store":"Cornucopia"},
  {"date":1560288600000,"invoiceId":102,"item":"Mango","price":0.53,"units":32, "store":"Cornucopia"},
  {"date":1560375000000,"invoiceId":103,"item":"Lemon","price":0.52,"units":24,"store":"Casa Fruta"},
  {"date":1560375000000,"invoiceId":103,"item":"Banana","price":0.34,"units":38,"store":"Casa Fruta"},
  {"date":1560375000000,"invoiceId":103,"item":"Mango","price":0.71,"units":9,"store":"Casa Fruta"},
  {"date":1561411800000,"invoiceId":104,"item":"Fuji Apple","price":1.82,"units":5,"store":"Better Produce"},
  {"date":1561411800000,"invoiceId":104,"item":"Orange","price":1.07,"units":11,"store":"Better Produce"},
  {"date":1561411800000,"invoiceId":104,"item":"Banana","price":0.46,"units":35,"store":"Better Produce"},
  {"date":1561411800000,"invoiceId":104,"item":"Mango","price":1.27,"units":6,"store":"Better Produce"},
  {"date":1562016600000,"invoiceId":105,"item":"Orange","price":0.71,"units":7,"store":"Valley Spread"},
  {"date":1562621400000,"invoiceId":106,"item":"Grapefruit","price":0.76,"units":17,"store":"Valley Spread"},
  {"date":1562621400000,"invoiceId":106,"item":"Lemon","price":0.67,"units":3,"store":"Valley Spread"},
  {"date":1563226200000,"invoiceId":107,"item":"Grapefruit","price":1.33,"units":1,"store":"Better Produce"},
  {"date":1563226200000,"invoiceId":107,"item":"Orange","price":1.06,"units":15,"store":"Better Produce"},
  {"date":1563226200000,"invoiceId":107,"item":"Mango","price":1.19,"units":9,"store":"Better Produce"},
  {"date":1563831000000,"invoiceId":108,"item":"Gala Apple","price":1.94,"units":5,"store":"Better Produce"},
  {"date":1563831000000,"invoiceId":108,"item":"Grapefruit","price":1.38,"units":13, "store":"Better Produce"},
  {"date":1563831000000,"invoiceId":108,"item":"Orange","price":1.08,"units":10,"store":"Better Produce"},
  {"date":1563831000000,"invoiceId":108,"item":"Banana","price":0.36,"units":7,"store":"Better Produce"},
  {"date":1563831000000,"invoiceId":108,"item":"Mango","price":1.25,"units":15,"store":"Better Produce"},
  {"date":1564435800000,"invoiceId":109,"item":"Grapefruit","price":0.81,"units":4,"store":"Casa Fruta"},
  {"date":1564435800000,"invoiceId":109,"item":"Orange","price":0.52,"units":33,"store":"Casa Fruta"},
  {"date":1564435800000,"invoiceId":109,"item":"Lemon","price":0.57,"units":26,"store":"Casa Fruta"},
  {"date":1565040600000,"invoiceId":110,"item":"Orange","price":0.82,"units":18, "store":"Cornucopia"},
  {"date":1565040600000,"invoiceId":110,"item":"Banana","price":0.49,"units":1, "store":"Cornucopia"},
  {"date":1565040600000,"invoiceId":110,"item":"Mango","price":0.95,"units":14, "store":"Cornucopia"},
  {"date":1565904600000,"invoiceId":111,"item":"Grapefruit","price":1.31,"units":8,"store":"Better Produce"},
  {"date":1565904600000,"invoiceId":111,"item":"Orange","price":1.15,"units":3,"store":"Better Produce"},
  {"date":1565904600000,"invoiceId":111,"item":"Banana","price":0.49,"units":13,"store":"Better Produce"},
  {"date":1565904600000,"invoiceId":111,"item":"Mango","price":1.19,"units":2,"store":"Better Produce"},
  {"date":1566336600000,"invoiceId":112,"item":"Gala Apple","price":1.62,"units":5 ,"store":"Cornucopia"},
  {"date":1566336600000,"invoiceId":112,"item":"Grapefruit","price":1.26,"units":11, "store":"Cornucopia"},
  {"date":1566336600000,"invoiceId":112,"item":"Orange","price":0.84,"units":7 ,"store":"Cornucopia"},
  {"date":1566336600000,"invoiceId":112,"item":"Mango","price":1.18,"units":15, "store":"Cornucopia"},
  {"date":1567114200000,"invoiceId":113,"item":"Fuji Apple","price":1.92,"units":5,"store":"Better Produce"},
  {"date":1567114200000,"invoiceId":113,"item":"Orange","price":1.01,"units":1,"store":"Better Produce"},
  {"date":1567459800000,"invoiceId":114,"item":"Fuji Apple","price":1.53,"units":1 ,"store":"Cornucopia"},
  {"date":1567459800000,"invoiceId":114,"item":"Grapefruit","price":0.75,"units":25, "store":"Cornucopia"},
  {"date":1567459800000,"invoiceId":114,"item":"Banana","price":0.64,"units":20, "store":"Cornucopia"},
  {"date":1568323800000,"invoiceId":115,"item":"Gala Apple","price":1.98,"units":1, "store":"Better Produce"},
  {"date":1568323800000,"invoiceId":115,"item":"Fuji Apple","price":1.81,"units":6,"store":"Better Produce"},
  {"date":1568323800000,"invoiceId":115,"item":"Orange","price":1.08,"units":3,"store":"Better Produce"},
  {"date":1568323800000,"invoiceId":115,"item":"Banana","price":0.37,"units":15,"store":"Better Produce"},
  {"date":1568323800000,"invoiceId":115,"item":"Mango","price":1.16,"units":3,"store":"Better Produce"},
  {"date":1568410200000,"invoiceId":116,"item":"Gala Apple","price":1.81,"units":10,"store":"Cornucopia"},
  {"date":1568410200000,"invoiceId":116,"item":"Grapefruit","price":0.75,"units":1, "store":"Cornucopia"},
  {"date":1568410200000,"invoiceId":116,"item":"Lemon","price":0.93,"units":14, "store":"Cornucopia"},
  {"date":1568410200000,"invoiceId":116,"item":"Mango","price":0.61,"units":25, "store":"Cornucopia"},
  {"date":1568928600000,"invoiceId":117,"item":"Gala Apple","price":1.99,"units":3,"store":"Better Produce"},
  {"date":1568928600000,"invoiceId":117,"item":"Fuji Apple","price":1.88,"units":6,"store":"Better Produce"},
  {"date":1568928600000,"invoiceId":117,"item":"Grapefruit","price":1.31,"units":13,"store":"Better Produce"},
  {"date":1568928600000,"invoiceId":117,"item":"Orange","price":1.04,"units":1,"store":"Better Produce"},
  {"date":1568928600000,"invoiceId":117,"item":"Banana","price":0.38,"units":3,"store":"Better Produce"},
  {"date":1569274200000,"invoiceId":118,"item":"Gala Apple","price":1.35,"units":10,"store":"Valley Spread"},
  {"date":1569274200000,"invoiceId":118,"item":"Grapefruit","price":0.97,"units":6, "store":"Valley Spread"},
  {"date":1569274200000,"invoiceId":118,"item":"Orange","price":0.56,"units":30,"store":"Valley Spread"},
  {"date":1569274200000,"invoiceId":118,"item":"Banana","price":0.36,"units":25,"store":"Valley Spread"},
  {"date":1569879000000,"invoiceId":119,"item":"Grapefruit","price":0.75,"units":24, "store":"Casa Fruta"},
  {"date":1569879000000,"invoiceId":119,"item":"Orange","price":0.56,"units":17,"store":"Casa Fruta"},
  {"date":1569879000000,"invoiceId":119,"item":"Lemon","price":0.39,"units":44,"store":"Casa Fruta"},
  {"date":1570570200000,"invoiceId":120,"item":"Grapefruit","price":1.05,"units":13, "store":"Valley Spread"},
  {"date":1570570200000,"invoiceId":120,"item":"Lemon","price":0.74,"units":10,"store":"Valley Spread"},
  {"date":1570656600000,"invoiceId":121,"item":"Orange","price":0.82,"units":8,"store":"Valley Spread"},
  {"date":1570656600000,"invoiceId":121,"item":"Lemon","price":0.45,"units":14,"store":"Valley Spread"},
  {"date":1571434200000,"invoiceId":122,"item":"Gala Apple","price":1.63,"units":1, "store":"Cornucopia"},
  {"date":1571434200000,"invoiceId":122,"item":"Fuji Apple","price":1.14,"units":13, "store":"Cornucopia"},
  {"date":1571434200000,"invoiceId":122,"item":"Grapefruit","price":0.71,"units":1, "store":"Cornucopia"},
  {"date":1571434200000,"invoiceId":122,"item":"Lemon","price":0.29,"units":65, "store":"Cornucopia"},
  {"date":1571434200000,"invoiceId":122,"item":"Banana","price":0.25,"units":63, "store":"Cornucopia"}
];
function addTableCell(tr, strValue) {
  var td = document.createElement('td');
  td.appendChild(document.createTextNode(strValue));
  tr.appendChild(td);
}
function renderTable() {
  var tableBody = document.getElementById("table-body");
  for (var i = 0; i < fruitSales.length; i++) {
    var purchase = fruitSales[i];
    var tr = document.createElement('tr');
    addTableCell(tr, new Date(purchase["date"]).toLocaleDateString());
    addTableCell(tr, purchase["invoiceId"]);
    addTableCell(tr, purchase["item"]);
    addTableCell(tr, "$" + purchase["price"]);
    addTableCell(tr, purchase["units"]);
    addTableCell(tr, purchase["store"]);
    tableBody.appendChild(tr);
  }
}

const banana = fruitSales.filter(b => b.item === "Banana");
const orange = fruitSales.filter(o => o.item === "Orange");
const lemon = fruitSales.filter(l => l.item === "Lemon");
const grapefruit = fruitSales.filter(g => g.item === "Grapefruit");
const fuji = fruitSales.filter(f => f.item === "Fuji Apple");
const gala = fruitSales.filter(a => a.item === "Gala Apple");
const mango = fruitSales.filter(m => m.item === "Mango");

const bananaUnits = banana.map(x => x.units);
const bananaSum = bananaUnits.reduce((a, x) => a+=x, 0);

const orangeUnits = orange.map(x => x.units);
const orangeSum = orangeUnits.reduce((a, x) => a+=x, 0);

const lemonUnits = lemon.map(x => x.units);
const lemonSum = lemonUnits.reduce((a, x) => a+=x, 0);

const grapefruitUnits = grapefruit.map(x => x.units);
const grapefruitSum = grapefruitUnits.reduce((a, x) => a+=x, 0);

const fujiUnits = fuji.map(x => x.units);
const fujiSum = fujiUnits.reduce((a, x) => a+=x, 0);

const galaUnits = gala.map(x => x.units);
const galaSum = galaUnits.reduce((a, x) => a+=x, 0);

const mangoUnits = mango.map(x => x.units);
const mangoSum = mangoUnits.reduce((a, x) => a+=x, 0);

google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawPieChart);

function drawPieChart() {

  var data = google.visualization.arrayToDataTable([
    ['Fruit', 'Amount'],
    ['Banana', bananaSum],
    ['Grapefruit', grapefruitSum],
    ['Orange', orangeSum],
    ['Mango', mangoSum],
    ['Gala Apple', galaSum],
    ['Fuji Apple', fujiSum],
    ['Lemon', lemonSum]
  ]);

  var options = {
    title: 'Units per period',
    pieHole: 0.4,
    width: 750,
    height: 500,
    colors: ['#f2e805', '#82b627', '#e3a021',
      '#e5501e', '#e51e82', '#cf1ee5', '#c5db11'
    ]
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawBasicOne);

function drawBasicOne() {

  var data = google.visualization.arrayToDataTable([
    ['Month', 'Amount', {
      role: 'style'
    }],
    ['June', 349, 'color:  #f2e805'],
    ['July', 165, 'color: #b1d81e'],
    ['August', 103, 'fill-color: #1ed859; fill-opacity: 0.2'],
    ['September', 306, 'stroke-color: #b1d81e; stroke-width: 4; fill-color: #e3e090'],
    ['October', 188, 'stroke-color: #f2e805; stroke-opacity: 0.6; stroke-width: 8; fill-color: #b1d81e; fill-opacity: 0.3']
  ]);

  var options = {
    title: 'Monthly total purchases',
    width: 750,
    height: 500,
    chartArea: {
      width: '50%'
    },
    hAxis: {
      title: 'Total amount',
      minValue: 0
    },
    vAxis: {
      title: 'Month'
    }
  };

  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}

google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Banana', 'Grapefruit', 'Orange', 'Mango', 'Gala Apple', 'Fuji Apple', 'Lemon'],
    ['June', 192, 16, 42, 70, 0, 5, 24],
    ['July', 7, 35, 65, 24, 5, 0, 29],
    ['August', 14, 19, 29, 31, 5, 5, 0],
    ['September', 63, 69, 51, 28, 24, 13, 58],
    ['October', 63, 14, 8, 0, 1, 13, 89]
  ]);

  var options = {
    title: 'Monthly trend of purchases',
    width: 750,
    height: 500,
    curveType: 'function',
    legend: {
      position: 'bottom'
    },
    lineWidth: 2,
    colors: ['#f2e805', '#82b627', '#e3a021',
      '#e5501e', '#e51e82', '#cf1ee5', '#c5db11'
    ]
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Banana', 'Grapefruit', 'Orange', 'Mango', 'Gala Apple', 'Fuji Apple', 'Lemon'],
    ['June', 192, 16, 42, 70, 0, 5, 24],
    ['July', 7, 35, 65, 24, 5, 0, 29],
    ['August', 14, 19, 29, 31, 5, 5, 0],
    ['September', 63, 69, 51, 28, 24, 13, 58],
    ['October', 63, 14, 8, 0, 1, 13, 89]
  ]);

  var options = {
    title: 'Monthly most popular items',
    width: 750,
    height: 500,
    vAxis: {
      title: 'Amount'
    },
    hAxis: {
      title: 'Month'
    },
    seriesType: 'bars',
    series: {
      5: {
        type: 'line'
      }
    },
    colors: ['#f2e805', '#82b627', '#e3a021',
      '#e5501e', '#e51e82', '#cf1ee5', '#c5db11'
    ]
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart-items_div'));
  chart.draw(data, options);
}
