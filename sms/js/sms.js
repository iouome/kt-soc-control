function drawPie (_id) { //점검 현황 그래프
	Highcharts.chart(_id, {
	    chart: {
	    	backgroundColor: 'transparent',
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie',
	        margin: [0, 0, 0, 0],
	        spacingTop: 0,
	        spacingBottom: 0,
	        spacingLeft: 0,
	        spacingRight: 0,
	    },
	     title: {
	        text: null
	    },
	    credits: {
	      enabled: false
	  	},
	    tooltip: {
	        enabled: false
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            size:'118%', //pie차트 div영역내에 100%로
	            dataLabels: {
	                enabled: false
	            },
	            borderWidth: 0,
	            colors: [
				     '#1c66c7', 
				     '#1ca9b3', 
				     '#fa555d',  //pie color
				],
	        },
	        point: {
	          events: {
	            click: null
	          }
	        },
	        series: {
	            states: {
	                hover: {
	                    enabled: false //pie차트 hover 기능 삭제
	                }
	            }
	        }
	    },
	    series: [{
	        name: 'Brands',
	        colorByPoint: true,
	        data: [{
	            name: '자동 발송',
	            y: 30,
	        },{
	            name: '수동 발송'
,	            y: 55
	        },{
	            name: '발송 실패'
,	            y: 15
	        }]
	    }],
	});
}

function drawAreasLine (_id) { //이벤트 등록 및 처리 현황 그래프
	Highcharts.chart(_id, {
	    chart: {
	    	backgroundColor: 'transparent',
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'areaspline',
	        spacingTop: 4,
	        spacingBottom: 0,
	        spacingLeft: 0,
	        spacingRight: 0,
	    },
	     title: {
	        text: null
	    },
	    legend: {
	    	enabled: false
	    },
	    credits: {
	      enabled: false
	  	},
	  	xAxis: {
	  		gridLineWidth: 0,
	        categories: [
	            '02',
	            '04',
	            '06',
	            '08',
	            '10',
	            '12',
	            '14'
	        ],
	        plotBands: [{ // visualize the weekend
	            from: 4.5,
	            to: 6.5,
	            color: 'rgba(11, 57, 162, .1)'
	        }],
	        labels: {
	            style: {
	                color: '#7694ad'
	            }
	        },
	    },
	    yAxis: {
	        title: {
	            text: ''
	        },
	        labels: {
	            style: {
	                color: '#315b7d'
	            }
	        },
	    },
	    tooltip: {
	        enabled: false
	    },
	    plotOptions: {
	         areaspline: {
	            fillOpacity: 0.5
	        },
	        point: {
	          events: {
	            click: null
	          }
	        },
	        series: {
	            color: '#0b5460',
	            marker: {
	                fillColor: '#26cfde',
	                lineWidth: 2,
	                lineColor: null // inherit from series
	            }
	        }
	    },
	    series: [{
	        name: 'John',
	        data: [3, 4, 3, 5, 4, 10, 12]
	    }],
	});
}


$(document).ready(function () {	

	//그래프
	drawPie("sms_status_graph");
	drawAreasLine("sms_manual_graph");
	drawAreasLine("sms_auto_graph1");
	drawAreasLine("sms_auto_graph2");

	var jsonData = [
	  {
	    id  : 1,
	    text : "Folder 1",
	    type: "root",
	    state : {
	      selected  : false
	    },
	    children    : [
	      {
	        id  : 2,
	        text : "Sub Folder 1",
	        type: "child",
	        state : {
	          selected  : false
	        },  
	      },
	      {
	        id  : 3,
	        text : "Sub Folder 2",
	        type: "child",
	        state : {
	          selected  : false
	        },  
	      },
	      {
	        id  : 4,
	        text : "Sub Folder 3",
	        type: "child",
	        state : {
	          selected  : false
	        },  
	      },
	      {
	        id  : 5,
	        text : "Sub Folder 4",
	        type: "child",
	        state : {
	          selected  : false
	        },  
	      },
	      {
	        id  : 6,
	        text : "Sub Folder 5",
	        type: "child",
	        state : {
	          selected  : false
	        },  
	      },
	      {
	        id  : 7,
	        text : "Sub Folder 6",
	        type: "child",
	        state : {
	          selected  : false
	        },  
	      },
	      {
	        id  : 8,
	        text : "Sub Folder 7",
	        type: "child",
	        state : {
	          selected  : false
	        },  
	      },
	      {
	        id  : 9,
	        text : "Sub Folder 8",
	        type: "child",
	        state : {
	          selected  : false
	        },  
	      },
	      {
	        id  : 10,
	        text : "Sub Folder 9",
	        type: "child",
	        state : {
	          selected  : false
	        },  
	      },
	    ]
	  }, 
	  {
	    id: 11,
	    text : "Folder 2",
	    type: "root",
	    state : {
	      selected : true
	    },
	    children : []
	  }
	];
	$('#jstree').jstree({
		core: {
		    data: jsonData
		  },
		  types: {
		    "root": {
		      "icon" : "img/popup/06_sms_icon_tree_person.png"
		    },
		    "child": {
		      "icon" : "img/popup/06_sms_icon_tree_person.png"
		    },
		    "default" : {
		    }
		  },
		  plugins: ["search", "themes", "types"]
	});

})