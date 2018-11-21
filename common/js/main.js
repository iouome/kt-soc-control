$(document).ready(function () {	

	$('.marquee').marquee({   //footer - 흐르는 텍스트 (변경예정)
		duration: 15000,
		delayBeforeStart: 0,
		duplicated: true
	});

	$openBtn = $(".show_hide_arrow");
	$menu = $("#gnb");
	$list = $("#gnb > ul > li");
	$item = $("#gnb > ul > li > a");
	$lastList = $list.filter('.active');

	$openBtn.click(function(e){
		//menu가 열려있을 때   
		if ($(this).hasClass("open")) {
			//menu를 닫는다
			$(this).removeClass("open");
			$menu.removeClass("open");			
		//menu가 닫혀있을 때
		} else {
			$(this).addClass("open");
			$menu.addClass("open");
		}
	});

	$list.click(function(e){
		//e.preventDefault();

		var currentList = $(this);

		$lastList.removeClass('active');
		currentList.addClass('active');

		$lastList = currentList;	
	});


	// 헤더 알람 popover
	$('.alarm_popover').popover({
		html: true,
		placement: 'bottom',
		//content: $('#popover_content')
		content: $('#popover_content')
	});

	$('.alarm_popover').popover('hide');
	$('.alarm_popover').popover('show');
	$('.alarm_popover').popover('hide');

	var scrollEvent = function (_event) {
		console.log("A");
		if (_event.deltaY < 0) {
			$("#popover_content").find(".table_box").mCustomScrollbar("scrollTo", "-=48");
		} else {
			$("#popover_content").find(".table_box").mCustomScrollbar("scrollTo", "+=48");
		}
	};
	$('.alarm_popover').on('shown.bs.popover', function () {
		$("#popover_content").find(".table_box").mCustomScrollbar({
			callbacks: {
				onInit: function () {
					console.log(init)
					return false;
				}
			}
		});
		//$("#popover_content").find(".table_box").on("mousewheel", scrollEvent)
		// do something…
	})
	$('.alarm_popover').on('hide.bs.popover', function () {
		$("#popover_content").find(".table_box").off("mousewheel");
		// do something…
	})
	$('.alarm_popover').on('hidden.bs.popover', function () {
		// $("#popover_content").find(".table_box").mCustomScrollbar("destroy");
		// do something…
	})

	var badge = $('.alarm_badge').text();
	badgeDigit = badge.length;
	if(badge >= 10){  //알람 개수가 10이상부터 9+로 표출 
		$('.alarm_badge').html('9+');
	}
})