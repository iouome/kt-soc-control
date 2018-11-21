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
	            pointWidth: 10, //막대그래프 각 width값
	            pointPadding: 0.1,
	        }
	    },
	    series: [{
	        name: '수시 점검',
	        data: [49.9, 71.5, 106.4, 129.2,49.9, 71.5, 106.4, 129.2,49.9, 71.5, 106.4, 129.2]

	    }, {
	        name: '정기 점검',
	        data: [83.6, 78.8, 98.5, 93.4,83.6, 78.8, 98.5, 93.4,83.6, 78.8, 98.5, 93.4]

	    }]
	});
}

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
	            size:'130%', //pie차트 div영역내에 100%로
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
	            name: '수시 점검',
	            y: 70,
	        }, {
	            name: '정기 점검'
,	            y: 30
	        }]
	    }],
	});
}


$(document).ready(function () {	

	//그래프
	drawMultiColumn("check_graph");
	drawPie("check_status_graph");

	$(".data_wrap").each(function(){   //Tab 구현
		var tab = $(this);
		var list = tab.find('.tab li a');
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

    //테이블 행 선택
    var row = $('.eve_table tbody tr');

	row.on('click', function(event) {
        $(this).addClass('active').siblings().removeClass('active');
    });
})