function getData(n) {
    var arr = [],
        i,
        x,
        a,
        b,
        c,
        spike;
    for (
        i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) + n * 36e5;
        i < n;
        i = i + 1, x = x + 36e5
    ) {
        if (i % 100 === 0) {
            a = 2 * Math.random();
        }
        if (i % 1000 === 0) {
            b = 2 * Math.random();
        }
        if (i % 10000 === 0) {
            c = 2 * Math.random();
        }
        if (i % 50000 === 0) {
            spike = 10;
        } else {
            spike = 0;
        }
        arr.push([
            x,
            2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
        ]);
    }
    return arr;
}
var n = 5000,
    data = getData(n);

function drawLineChart (_id) { //이벤트 전/후 데이터 그래프
	Highcharts.chart(_id, {
	    chart: {
	    	zoomType: 'x',
	    	plotBackgroundColor: null,
	    	backgroundColor: 'transparent',
	    },
	     title: {
	        text: null
	    },
	    credits: {
	      enabled: false
	  	},
	    tooltip: {
	        valueDecimals: 2
	    },
	    legend : {
	    	enabled: false 
	    },
	    xAxis: {
	        type: 'datetime',
	        labels: {
	            style: {
	                color: '#b7c2cb',
	                fontSize: '9px'
	            }
	        },
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
	    series: [{
	        name: 'Brands',
	        data: data,
        	lineWidth: 0.5,
	    }],
	});
}

function drawSplineChart (_id) { //이벤트 전/후 데이터 그래프
	Highcharts.chart(_id, {
	    chart: {
	    	type: 'spline',
	    	zoomType: 'x',
	    	plotBackgroundColor: null,
	    	backgroundColor: 'transparent',
	    	spacingTop: 26,
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
	    legend: {
	  		itemDistance: 11,
	  		align: 'left',
		    x: 20,
		    y: -27,
		    verticalAlign: 'top',
		    floating: true,
		    itemStyle: {
		        color: '#c5d4e0',
		        fontSize: '10px',
		    },
		    navigation: {
		    	symbolHeight: '7px'
		    }
		},
	    xAxis: {
	        type: 'datetime',
	        labels: {
	            style: {
	                color: '#b7c2cb',
	                fontSize: '9px'
	            }
	        },
	        categories: ['2018', '2018', '2018']
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
	    series: [{
	        name: '현재시점',
	        data: [
	        	{
		            y: 7.2,
		            marker: {
		                fillColor: '#2be3b8'
		            }
		        }, {
		            y: 6.9,
		            marker: {
		                fillColor: '#ffe566'
		            }
		        }, {
		            y: 26.5,
		            marker: {
		                fillColor: '#fa4953'
		            }
		        }, 23.3]
	    }],
	});
}

$(document).ready(function () {	

	// Nested Modal 닫기
	$(".closeModal").click(function(){
        $(this).closest(".modal").modal("hide");
    });

	// Tab
    $(".action_area").each(function(){   
		var tab = $(this);
		var list = tab.find('ul li a');
		var content = tab.find('.tab_con');
		var lastList = list.filter('.active');
		var lastContent = $(lastList.attr('href'));

		var btnAction = $('.btn_action');

		content.hide();
		lastContent.show();

		list.click(function(event){
			event.preventDefault();

			//각 탭의 버튼 유무
			if($(this).parent().index() === 1){
				btnAction.hide();
			} else if($(this).parent().index() === 2){
				btnAction.show().text('상세보기');
				btnAction.click(function(event){
					 $("#manual_modal").modal({
						show:true
					});
				});
			} else {
				btnAction.show().text('SMS 전송');
			}

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
	
	// SMS 발송 대상 - jstree
	$('#jstree, #jstree02').jstree({
		"plugins" : [ "wholerow", "checkbox" ],
	});

	// 이벤트 전/후 데이터 - 그래프 
	drawLineChart("graph");
	drawLineChart("graph_con");
	drawSplineChart("bigdata_graph");
	drawSplineChart("magn_bigdata_graph");

	// 이벤트 띠 숨기기
	var eveHeader = $(".emergency_header");
	$(".btn_eve_close").click(function(){
		eveHeader.css("display","none");
	});
})