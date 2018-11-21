$(document).ready(function () {	

	// Tab
    $(".map_wrap, .communi_wrap").each(function(){   
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

	//피해 이벤트 & 이벤트 대응 Tab
	$(".event_record > ul").each(function(){
		var eventTab = $(this);
		var btn = eventTab.find('li button');
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

	// SMS 발송 대상 - jstree
	$('#msg_jstree, #sms_jstree').jstree({
		"plugins" : [ "wholerow", "checkbox" ],
	});
	$('#msg_jstree, #sms_jstree').on("changed.jstree", function (e, data) {
      console.log(data.selected);
    });


	$(".timeline").mCustomScrollbar({
	    //autoHideScrollbar:"true"
	});	

	//타임라인 '자세히 보기' 버튼 클릭시 이벤트 
	$('.timeline-content').each(function(){
		var timelineItem = $(this);
		var timelineCon = timelineItem.find('p');
		var detailBtn = timelineItem.find('.btn');
		detailBtn.click(function(event){

			event.preventDefault();

			timelineCon.toggleClass("detail");
			timelineCon.toggleClass(function(){
				if ($(this).is('.detail')) { 
					return detailBtn.text("자세히 보기 >");
				} else { 
					return detailBtn.text("접기 >");
				}
			});
		});

	});
})