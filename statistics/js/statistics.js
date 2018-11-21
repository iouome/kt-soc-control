$(document).ready(function () {	

	function changeVec () {
		var vecName = $(".wind_dir_nm");
		var target = $(".wind_arrow");
		var vec= 90;
		target.css('transform','rotate(' + vec + 'deg)');

		if(vec > 0 && vec <= 45){
			vecName.text("북-북동")
		} else if (vec > 45 && vec <= 90) {
			vecName.text("북동-동")
		} else if (vec > 90 && vec <= 135) {
			vecName.text("동-남동")
		} else if (vec > 135 && vec <= 180) {
			vecName.text("남동-동")
		} else if (vec > 180 && vec <= 225) {
			vecName.text("남-남서")
		} else if (vec > 225 && vec <= 270) {
			vecName.text("남서-서")
		} else if (vec > 270 && vec <= 315) {
			vecName.text("서-북서")
		} else if (vec > 315 && vec <= 360) {
			vecName.text("북서-북")
		}
	}

	changeVec();

	//Select
	$('select').selectric();

	// Tab
    $(".disaster_wrap").each(function(){   
		var dis_tab = $(this);
		var dis_list = dis_tab.find('.tab li a');
		var dis_content = dis_tab.find('.tab_con');
		var lastList = dis_list.filter('.active');
		var lastContent = $(lastList.attr('href'));

		dis_content.hide();
		lastContent.show();

		dis_list.click(function(event){
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
})