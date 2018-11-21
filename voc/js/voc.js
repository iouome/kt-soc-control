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
				     '#f9c359', 
				     '#26c6a2', 
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

function drawMultiColumn (_id) { //기간별 점검 통계 그래프
	Highcharts.chart(_id, {
	    chart: {
	    	backgroundColor: 'transparent',
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'column',
	        spacingTop: 35,
	        spacingBottom: 0,
	        spacingLeft: 0,
	        spacingRight: 0,
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
		        fontSize: '10px',
		    },
		    navigation: {
		    	symbolHeight: '7px'
		    }
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
	            '11월',
	            '12월',
	        ],
	        labels: {
	            style: {
	                color: '#7694ad',
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
	                color: '#315b7d',
	                fontSize: '9px'
	            }
	        },
	    },
	    tooltip: {
	        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
	        footerFormat: '</table>',
	        shared: true,
	        useHTML: true
	    },
	    plotOptions: {
	        column: {
	            pointPadding: 0.6,
	            borderWidth: 0
	        },
	        series: {
	            pointWidth: 6, //막대그래프 각 width값
	            pointPadding: 0.1,
	        },

	    },
	    series: [{
	        name: '처리중',
	        color: '#d9ab4e',  //범례 기호 컬러
	        data: [49.9, 71.5, 106.4, 129.2,49.9, 71.5, 106.4, 129.2,49.9, 71.5, 106.4, 129.2]

	    }, {
	        name: '완료',
	        color: '#26c6a2',  //범례 기호 컬러
	        data: [83.6, 78.8, 98.5, 93.4,83.6, 78.8, 98.5, 93.4,83.6, 78.8, 98.5, 93.4]

	    }, {
	        name: '실패',
	        color: '#fa555d',  //범례 기호 컬러
	        data: [23.6, 78.8, 88.5, 93.4,83.6, 68.8, 96.5, 74.4, 93.6, 68.8, 12.5, 93.4]

	    }]
	});
}

function drawDonut (_id) { //점검 현황 그래프
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
	        	innerSize: '80%',
	            allowPointSelect: true,
	            cursor: 'pointer',
	            size:'118%', //pie차트 div영역내에 100%로
	            dataLabels: {
	                enabled: false
	            },
	            borderWidth: 0,
	            colors: [
				     '#38506b', 
				     '#26c6a2', 
				     '#f9c359',  //pie color
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

$(document).ready(function () {	

	//그래프
	drawPie("voc_status_graph"); //voc 현황
	drawMultiColumn("voc_sta_graph"); //voc 통계
	drawDonut("servie_voc_graph"); //voc 유형별 통계 - 서비스 voc
	drawDonut("sensor_voc_graph"); //voc 유형별 통계 - 센서 voc

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
	$('select').selectric({
		 maxHeight: 200
	});


	// var btnRegist = $('.btn_regist');
	// var btnModify = $('.btn_modify');
	// var btnClose = $('.btn_cancle');
	// var vocListCon = $('#voc_list');
	// var vocRegistCon = $('#voc_regist');
	// var vocModifyCon = $('#voc_modify');

	var list = $('.voc_history_table tr');

	// vocRegistCon.hide();
	// vocModifyCon.hide();

	// btnRegist.click(function(event){
	// 	vocListCon.hide();
	// 	vocRegistCon.show();
	// 	btnClose.click(function(event){
	// 		vocRegistCon.hide();
	// 		vocListCon.show();
	// 	});
	// });
	// btnModify.click(function(event){
	// 	vocListCon.hide();
	// 	vocModifyCon.show();
	// 	btnClose.click(function(event){
	// 		vocModifyCon.hide();
	// 		vocListCon.show();
	// 	});
	// });

	//테이블 행 선택
	list.on('click', function(event) {
        $(this).addClass('active').siblings().removeClass('active');
    });

	//셀렉트박스 옵션 선택시, 해당 div 표출
	var regiService = $('#voc_regist .service_form');
	var regiSensor = $('#voc_regist .sensor_form');
	var modiService = $('#voc_modify .service_form');
	var modiSensor = $('#voc_modify .sensor_form');

	$('#regi_select_box, #modi_select_box').change(function(){
		var state1 = $('#regi_select_box option:selected').val();
		var state2 = $('#modi_select_box option:selected').val();
		if(state1 == '서비스') {
			regiSensor.hide();
			regiService.show();
		} else if(state1 == '센서'){
			regiService.hide();
			regiSensor.show();
		}; 

		if(state2 == '서비스') {
			modiSensor.hide();
			modiService.show();
		} else if(state2 == '센서'){
			modiService.hide();
			modiSensor.show();
		};
	});

	// Tab
    $(".voc_status").each(function(){   
		var chart_tab = $(this);
		var chart_list = chart_tab.find('.tab li a');
		var chart_content = chart_tab.find('.tab_con');
		var lastList = chart_list.filter('.active');
		var lastContent = $(lastList.attr('href'));

		chart_content.hide();
		lastContent.show();

		chart_list.click(function(event){
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

	//Calendar
	var dateFormat = "yy/mm/dd",
      from = $( ".from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1,
       	  dateFormat: "yy/mm/dd"
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( ".to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: "yy/mm/dd"
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }

})