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

$(document).ready(function(){	

	//테이블 행 선택
    var row = $('.event_table tbody tr');

	row.on('click', function(event) {
        $(this).addClass('active').siblings().removeClass('active');
    });

	// SMS 발송 대상 - jstree
	$('#jstree, #modal_jstree').jstree({
		"plugins" : [ "wholerow", "checkbox" ],
	});

	drawAreasLine("event_measuring_graph");

	//이벤트 on&off 버튼
	$('.btn_on_off').click(function(){
		$('.btn_on_off > img').toggleClass('on');
		 if($('.btn_on_off > img').hasClass('on')) {
            $('.btn_on_off > img').attr("src","./img/04_event_button_on.png");
        } else {
            $('.btn_on_off > img').attr("src","./img/04_event_button_off.png");
        }
	});
})