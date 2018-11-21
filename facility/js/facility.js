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
	        backgroundColor: 'transparent',
	         spacingTop: 20,
	    },		  		    
	    legend: {
	        itemDistance: 27,
	  		align: 'right',
		    x: 0,
		    verticalAlign: 'top',
		    y: -42,
		    itemStyle: {
		    	fontFamily: 'NanumSquareB',
		        color: '#7694ad',
		        fontWeight: 'bold',
		        fontSize: '12px',
		    },
		    navigation: {
		    	symbolHeight: '10px'
		    }
	    },
	    series: [{
	        name: '최대',
	        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
	        lineColor : '#61b0ff',
	    },{
	        name: '최소',
	        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
	        lineColor : '#ffef61',
	    }, {
	        name: '평균',
	        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
	        lineColor : '#61ff7b',
	    }, {
	        name: '표준편차',
	        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
	        lineColor : '#ff7b61',
	    }],
	     plotOptions: {
	        series: {
	            label: {
	                connectorAllowed: false
	            },
	            pointStart: 2010
	        }
	    },
	    responsive: {
	        rules: [{
	            condition: {
	                maxWidth: 500
	            },
	            chartOptions: {
	                legend: {
	                    layout: 'horizontal',
	                    align: 'center',
	                    verticalAlign: 'bottom'
	                }
	            }
	        }]
	    }     
	});
}

function drawAreasLine (_id) { //계측데이터 및 안정상태 예측 그래프
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
	                color: '#315b7d'
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
	        }
	    },
	    series: [{
	        name: 'John',
	        data: [3, 4, 3, 5, 4, 10, 12],
	    }],
	});
}

$(document).ready(function () {	

	// Tab
    $(".data_wrap").each(function(){   
		var tab = $(this);
		var list = tab.find('.tab li a');
		var content = tab.find('.tab_con');
		var lastList = list.filter('.active');
		var lastContent = $(lastList.attr('href'));

		var btnList = $('.btn_show_list');
		var cctvList = $('.cctv_table_box');

		content.hide();
		lastContent.show();
		btnList.hide();
		cctvList.hide();

		list.click(function(event){
			event.preventDefault();

			if($(this).parent().index() === 2){
				btnList.show();
			} else{
				btnList.hide();
				btnList.removeClass('show_map');
				cctvList.hide();
			}

			btnList.click(function() {  //map영역 위 cctv테이블 유무
				console.log("Click")
			  	$(this).toggleClass('show_map');
			  	cctvList.toggle();
			});

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

	$("#measuring > .con_right").each(function(){   
		var tab = $(this);
		var list = tab.find('.tab_graph li a');
		var content = tab.find('.con_tab_graph');
		var lastList = list.filter('.active');
		var lastContent = $(lastList.attr('href'));

		content.hide();
		lastContent.show();

		list.click(function(event){
			event.preventDefault();


			var currentList = $(this);
			console.log(currentList);
			var currentContent = $(currentList.attr('href'));
			console.log(currentContent);
		
			lastList.removeClass('active');
			currentList.addClass('active');
			
			lastContent.hide();
			currentContent.show();
			
			lastList = currentList;
			lastContent = currentContent;
		});
	});


	$("#loca_info > .con_right").each(function(){   
		var tab = $(this);
		var list = tab.find('.tab_chart li a');
		var content = tab.find('.con_tab_chart');
		var lastList = list.filter('.active');
		var lastContent = $(lastList.attr('href'));

		content.hide();
		lastContent.show();

		list.click(function(event){
			event.preventDefault();


			var currentList = $(this);
			console.log(currentList);
			var currentContent = $(currentList.attr('href'));
			console.log(currentContent);
		
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
	
    //Select
	$('select').selectric();

	//Pagination
	$(".paging ul").each(function(){
		var paging = $(this);
		var btn = paging.find('li');
		var lastBtn = btn.filter('.active');
		btn.click(function(event){
			event.preventDefault();
			var currentBtn = $(this);
			lastBtn.removeClass('active');
			currentBtn.addClass('active');

			lastBtn = currentBtn;
		});
	});

	//graph
	drawCorrelationGraph("stats_graph");
	drawAreasLine("m_data_graph");
	drawAreasLine("stable_state_graph");

	//일간, 주간, 월간, 10분 버튼
	$(".select_period").each(function(){
		var type = $(this);
		var btn_type = type.find('li');
		var lastBtn = btn_type.filter('.active');
		btn_type.click(function(event){
			var currentBtn = $(this);
			lastBtn.removeClass('active');
			currentBtn.addClass('active');

			lastBtn = currentBtn;
		});
	});

	//테이블 행 선택
    var row = $('.sensor_table tbody tr');

	row.on('click', function(event) {
        $(this).addClass('active').siblings().removeClass('active');
    });


})