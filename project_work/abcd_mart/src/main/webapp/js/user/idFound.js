$('select[name="foundMailDomain"]').on('change', function() {
	var foundMail = $('select[name="foundMailDomain"]').val();
	

	if(foundMail == 'insert'){
		 $('#userMailAddress2').val('');
		 $('#userMailAddress2').prop('readonly',false);
	     
	}else{
		$('#userMailAddress2').val(foundMail);
		$('#userMailAddress2').prop('readonly',true);
	}

});

//인증번호요청 클릭
function autoCode(){
	var name =$('input[name=idUserName]');
	var email1 =$('input[name=userMailAddress1]');
	var email2 =$('input[name=userMailAddress2]');
/*	var email = email1.concat("@",email2);*/
	if($('#idUserName').val()==''){
		swal("이름을 입력해주세요");
	}else if($('#userMailAddress1').val()=='') {
		swal("이메일 주소를 입력해주세요");
	}else if($('#userMailAddress2').val()=='') {
		swal("이메일 주소를 입력해주세요");
	}else {
		//이동
		$.ajax({
			type: 'POST',
			url: '/abcd_mart/user/idFound',
			data: {'name':name.val(),
				'email':email1.val()+'@'+email2.val()},
			dataType: 'text',
			success: function(data) {
					if(data=='nopass'){
						swal('유효하지 않은 이메일 주소 입니다.');
					} else if(data=='pass'){
						swal('인증번호가 발송되었습니다.')
						$('#autoCodeEmail').removeAttr("disabled")
						
						
						/*$.ajax({
							type:'POST'
							url:'/abcd_mart/user/sendMail',
							data:'email':email1.val(),
							dataType: 'text',
							success: function(data) {
								swal('인증번호');
							}
						});*/
						
						
					
					}	//else if
			}
		});		
	}
}	
	/*else if{
		$(this).next().removeAttr("disabled")
	}*/

	
	

//확인하기 클릭
function findIdEmail(){
	var way ='email';
	var userName = $('#userNameEmail');
	//var userNamePhone = $('#userNamePhone');
	var email1 =$('#userMailAddress1');
	var email2 =$('#userMailAddress2');
	if(userName.val()==''){
		swal("이름을 입력해주세요");
	}else if(email1.val()==''||email2.val()=='') {
		swal("이메일 주소를 입력해주세요");
	}else {
		$.ajax({
			type: 'POST',
			url: '/abcd_mart/user/findMyId',
			data: {'way': way,//DB column
					'name': userName.val(),
					'email': email1.val()+'@'+email2.val()},
			dataType:'text',
			success: function(userId) {
				console.log(userId);
			}			
		});	
	}
}