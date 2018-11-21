function drawPie (_id) { //이벤트 등록 및 처리 현황 그래프
	Highcharts.chart(_id, {
	    chart: {
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
	            size:'115%', //pie 1개일때
	            //size:'125%', //pie 2개일때
	            //size:'157%', //pie차트 4개일때
	            dataLabels: {
	                enabled: false
	            },
	            borderWidth: 0
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
	            name: '발생',
	            y: 40,
	            sliced: false,
	            selected: true
	        }, {
	            name: '처리중',
	            y: 30
	        }, {
	            name: '완료',
	            y: 30
	        }]
	    }],
	});
}

function drawMultiColumn (_id) { //이벤트 등급별 통계 그래프
	Highcharts.chart(_id, {
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'column',
	        spacingTop: 35,
	        spacingBottom: 0,
	        spacingLeft: 0,
	        spacingRight: 0

	    },
	     title: {
	        text: null
	    },
	    subtitle: {
	        text: null
	    },
	    credits: {
	      enabled: false
	  	},
	  	legend: {
	  		itemDistance: 11,
	  		align: 'right',
		    x: 0,
		    verticalAlign: 'top',
		    y: -42,
		    floating: true,
		    itemStyle: {
		        color: '#87aac7',
		        fontWeight: 'bold',
		        fontSize: '9px',
		    },
		    navigation: {
		    	symbolHeight: '7px'
		    }
		},
	  	xAxis: {
	        categories: [
	            '교량',
	            '주차장',
	            '터널',
	            '공사장',
	        ],
	        labels: {
	            style: {
	                color: '#b7c2cb',
	                fontSize: '9px'
	            }
	        },
	        crosshair: true
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: null
	        },
	        labels: {
	            style: {
	                color: '#315b7d'
	            }
	        },
	    },
	    tooltip: {
	        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
	        footerFormat: '</table>',
	        shared: false,
	        useHTML: true
	    },
	    plotOptions: {
	        column: {
	            pointPadding: 0.6,
	            borderWidth: 0
	        },
	        series: {
	            pointWidth: 48, //차트 1개일때 width값
	            //pointWidth: 21, //차트 2개일때 width값
	            //pointWidth: 12, //차트 3개일때 width값
	            //pointWidth: 8, //막대그래프 각 width값
	            pointPadding: 0.1,
	            dataLabels: { //차트 1 or 2개일때, label style
	                enabled: true,
                 	y: 2, 
	                style: {
	                	fontFamily: 'NanumSquareB',
	                    fontSize: '14px',
	                    textOutline: '0px',
	                }
	            }
	        }
	    },
	    series: [{
	        name: '관심',
	        data: [49.9] //[49.9, 71.5, 106.4, 129.2]

	    }, {
	        name: '주의',
	        data: [83.6,] //[83.6, 78.8, 98.5, 93.4]

	    }, {
	        name: '경계',
	        data: [48.9] //[48.9, 38.8, 39.3, 41.4]

	    }, {
	        name: '심각',
	        data: [42.4] //[42.4, 33.2, 34.5, 39.7]

	    }]
	});
}

function drawColumn (_id) { //이벤트 발생 현황 그래프
	Highcharts.chart(_id, {
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'column',
	        inverted: false,
	        spacingTop: 85,
	        spacingBottom: 0,
	        spacingLeft: 0,
	        spacingRight: 0
	    },
	     title: {
	        text: null
	    },
	    subtitle: {
	        text: null
	    },
	    credits: {
	      enabled: false
	  	},
	  	legend: {
		    
		},
	  	xAxis: {
	        categories: [
	            '1월',
	            '2월',
	            '3월',
	            '4월',
	            '5월',
	            '6월',
	            '7월',
	            '8월',
	            '9월',
	            '10월',
	            '10월',
	            '11월',
	            '12월',
	        ],
	        labels: {
	            style: {
	                color: '#b7c2cb',
	                fontSize: '9px'
	            }
	        },
	        crosshair: true
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: null
	        },
	        labels: {
	            style: {
	                color: '#315b7d'
	            }
	        },
	    },
	    tooltip: {
	        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	            '<td style="padding:0"><b>{point.y:.1f} 건</b></td></tr>',
	        footerFormat: '</table>',
	        shared: true,
	        useHTML: true
	    },
	    plotOptions: {
	        column: {
	            borderWidth: 0,
	            states: {
		            hover: {
		                color: '#072e51'                                                           
		            }
		        }
	        },
	        series: {
	            pointWidth: 20, //막대그래프 각 width값
	        }
	    },
	    series: [{
	        name: '',
	        data: [49.9, 71.5, 106.4, 129.2, 40, 34,88,43,21,21,78,94,78],
	        showInLegend: false  
	    }]
	});
}

function drawCorrelationGraph (_id) { //상관 관계 분석 그래프
	Highcharts.chart(_id, {
	    title: {
	        text: ''
	    },		    
	    subtitle: {
	        text: ''
	    },
	    credits: {
	      enabled: false
	  	},
	    yAxis: {
	        title: {
	            text: ''
	        }
	    },
	    chart: {		      		    	
	        backgroundColor: '#1f1f21',

	    },		  		    
	    legend : {
	    	style : {
	    		display : 'none'
	    	}
	    },		    
	    series: [{		    	
	    	showInLegend: false,      
	    	lineWidth: 1,
	    	marker: {
	            radius: 3,
	            fillColor : "#10ffe9",
	        },
	        name: 'Connection',				
			color : "#4c9e97",				
	        data: [5,4,3,2,4,6,7,1,2,3,4,5,5,4,3,2,4,6,7,1,2,3,4,5]
	    }],
	    plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },      
	});
}

$(document).ready(function () {	
	//그래프
	drawPie("graph_bridge");
	drawPie("graph_pie");
	//drawPie("graph_tunnel");
	//drawPie("graph_cons");
	drawMultiColumn("graph_grade");
	drawMultiColumn("graph_grade02");
	drawColumn("graph_result");
	drawColumn("graph_result02");
	//drawCorrelationGraph("graph01");


	$(".graph_area").each(function(){   //Tab 구현
		var tab = $(this);
		var list = tab.find('ul li a');
		var content = tab.find('.tab_con');
		var lastList = list.filter('.active');
		var lastContent = $(lastList.attr('href'));

		content.hide();
		lastContent.show();

		list.click(function(event){
			event.preventDefault();

			var currentList = $(this);
			var currentContent = $(currentList.attr('href'));
		
			lastList.removeClass('active');
			currentList.addClass('active');
			
			lastContent.hide();
			currentContent.show();
			
			lastList = currentList;
			lastContent = currentContent;
		});

	});


	//그래프 내 년월일 버튼
	$(".select_period").each(function(){
		var tab = $(this);
		var btn = tab.find('li button');
		var lastBtn = btn.filter('.active');
		btn.click(function(event){
			var currentBtn = $(this);
			lastBtn.removeClass('active');
			currentBtn.addClass('active');

			lastBtn = currentBtn;
		});
	});

	//Select
	$('select').selectric();

})