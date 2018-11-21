$(document).ready(function () {	

	var btnRegist = $('.btn_regist');
	var btnModify = $('.btn_modify');
	var btnDelete = $('.btn_delete');

	var content = $('.content_wrap');
	var table = $('.noti_table');
	var list = $('.noti_table tr');
	var detailContent = $('.detail_wrap');
	var regiContent = $('.regist_wrap');
	var modiContent = $('.modify_wrap');

	const MODE_REGIST = 0;
	const MODE_MODIFY = 1;
	const MODE_DETAIL = 2;
	const MODE_LIST = 3;
	var currentMode = MODE_LIST;

	btnRegist.click(function(event){
		content.addClass('width_sm');
		regiContent.show(function () {
			currentMode = MODE_REGIST; //0
			btnDelete.text('닫기');
		});
		btnModify.hide(); //수정 버튼 숨김
	});

	btnModify.click(function(event){
		content.addClass('width_sm');
		modiContent.show(function(){
			currentMode = MODE_MODIFY; //1
			btnDelete.text('닫기');
		});
		btnRegist.hide(); //등록 버튼 숨김
	});

	btnDelete.click(function(event){

		if (currentMode == MODE_REGIST){
			regiContent.hide();
			btnModify.show(); //수정 버튼 보이기
			btnDelete.text('삭제');
		} else if (currentMode == MODE_MODIFY){
			modiContent.hide();
			btnRegist.show(); //등록 버튼 보이기
			btnDelete.text('삭제');
		} else if (currentMode == MODE_DETAIL){
			detailContent.hide();
			btnRegist.show(); //등록 버튼 보이기
			btnModify.show(); //수정 버튼 보이기
			btnDelete.text('삭제');
		}
		currentMode = MODE_LIST; //3
		content.removeClass('width_sm');
	});

	list.dblclick(function(event){
		if (currentMode == MODE_REGIST || currentMode == MODE_MODIFY) 
			return;
		content.addClass('width_sm');
		detailContent.show(function(){
			currentMode = MODE_DETAIL; //2
			btnDelete.text('닫기');
		});
		btnRegist.hide(); //등록 버튼 숨김
		btnModify.hide(); //수정 버튼 숨김
	});

	//테이블 행 선택
	list.on('click', function(event) {
        $(this).addClass('active').siblings().removeClass('active');
    });

	//Select
	$('select').selectric();

})