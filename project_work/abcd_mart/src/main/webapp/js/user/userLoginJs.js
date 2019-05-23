var isUserIdAvailable = false;

$(function(){
	$('#nonUserLoginTab').click(function(){
		$('#cm_tabs_01').css('display','none');
		$('#cm_tabs_02').css('display','block');
		$('#userLoginTabli').attr('class','bar');
		$('#nonUserLoginTabli').attr('class','current');
		
	});


	$('#userLoginTab').click(function(){
		$('#cm_tabs_01').css('display','block');
		$('#cm_tabs_02').css('display','none');
		$('#userLoginTabli').attr('class','bar current');
		$('#nonUserLoginTabli').attr('class','');
		
	});

	$('#loginBox_writeBtn').click(function(){
		location.href='/abcd_mart/user/loginStep_01.jsp';
	});

	$('#loginBox_loginBtn').click(function(){
		if($('#userId').val()==''){
			swal("아이디를 입력해주세요");
		}else if($('#userPwd').val()=='') {
			swal("비밀번호를 입력해주세요");
		}else {
			//이동
		}
	});
	
	
	
	
	///************* loginStep_01
	$('input#agree_all').on('click', function() {
        if($(this).is(':checked') == true) {
            $('input#cbPurchaseClause').prop('checked', true);
            $('input#cbEbankClause').prop('checked', true);
            $('input[name=cbPrivateClause][value=true]').prop('checked', true);
        } else {
            $('input#cbPurchaseClause').prop('checked', false);
            $('input#cbEbankClause').prop('checked', false);
            $('input[name=cbPrivateClause][value=false]').prop('checked', true);
        }
    });
    
    
    // 약관 팝업
    $('#btnPurchaseClause').on('click', function() {
        var url = 'https://www.abcmart.co.kr/abc/user/popupPurchaseClause';
        var options = 'width=550,height=710';
        window.open(url, '구매이용약관', options);
    });

    $('#btnEbankClause').on('click', function() {
        var url = 'https://www.abcmart.co.kr//abc/user/popupEbankClause';
        var options = 'width=550,height=710';
        window.open(url, '전자금융거래 이용약관', options);
    });

    $('#btnPrivateClause').on('click', function() {
        var url = 'https://www.abcmart.co.kr/abc/user/popupPrivateClause';
        var options = 'width=550,height=710';
        window.open(url, '개인정보처리방침', options);
    });
    
    
    
    
   //******************loginStep02
  
    $('span.check_password_blank').text(''); //비밀번호 항목 ''빈값
   
    //이메일2 직접입력&자동저장
	$('select[name=mailDomain]').on('change', function() {
		var mailDomain = $('select[name=mailDomain]').val();
		

		if(mailDomain == 'insert'){
			 $('#userEmail2').val('');
			 $('#userEmail2').prop('readonly',false);
		     
		}else{
			$('#userEmail2').val(mailDomain);
			$('#userEmail2').prop('readonly',true);
		}

	});

	
	//아이디중복 span 모두 none으로 비워줌
	$('input[name=userId]').on('change', function() {
	  isUserIdAvailable = false;
	  $('span.user_id_noti').css('display', 'none');
	});
	 
	//중복버튼 누르면
	$('#btnCheckUserId').on('click', function() {
	   var userId = $('input[name=userId]').val();
	 //비어있으면 
	   if($('input#userId').val() == '') { 
	       $('span.user_id_noti').css('display', 'none');
	       $('span.user_id_noti.enter').css('display', 'inline'); //입력하세요 창뜸
	       $('input[name=userId]').focus();
	       return false;
		}
	});
	
	
//	//비밀번호 입력되면 css사라지게
//	$('input[name=userPwd]').on('change',function(){
//		$('.check_password_noti.enter').css('display','none');
//	});
	
	
	$('input[name=userPwd]').on('focusout', function() {
      var userPwd = $(this).val();
      var userPwd2 = $('input[name=userPwd2]').val();
      $('span.check_password_noti.enter').css('display','none');
      $('span.check_password_noti.incorrect').css('display', 'none');
      
      if(userPwd!='' && userPwd2!=''){

    	  if(userPwd != userPwd2) {
      	    $('span.check_password_noti.incorrect').css('display', 'inline');//일치X
      	    return;
      	 }else if( userPwd == userPwd2){
      		$('span.check_password_noti.enter').css('display','inline');//일치
      		return;
      	 }
      }

    });//focuseout 비밀번호
	
	
	$('input[name=userPwd2]').on('focusout', function() {
	      $('span.check_password_noti.enter').css('display','none');
	      $('span.check_password_noti.incorrect').css('display', 'none');
	      
	      var userPwd2 = $(this).val();
	      var userPwd = $('input[name=userPwd]').val();
	      
	      if(userPwd!='' && userPwd2!=''){
	    	  if(userPwd != userPwd2) {
	      	    $('span.check_password_noti.incorrect').css('display', 'inline');//일치X
	      	    return;
	      	 }else if( userPwd == userPwd2){
	      		$('span.check_password_noti.enter').css('display','inline');//일치
	      		return;
	      	 }
	      }
	});//focuseout 비밀번호2

});//함수끗



function submit() {
    var $form = $('form#form-agreement');

    if(!$('input#cbPurchaseClause').is(':checked')) {
        alert('구매이용약관에 동의해 주세요.');
        $('input#cbPurchaseClause').focus();
        return;
    }

    if(!$('input#cbEbankClause').is(':checked')) {
        alert('전자금융거래 이용약관에 동의해 주세요.');
        $('input#cbEbankClause').focus();
        return;
    }

    if($('input[name=cbPrivateClause]:checked').val() == 'false') {
        alert('개인정보 수집 및 이용에 대한 안내 (필수)에 동의해 주세요.');
        $('input[name=cbPrivateClause]').focus();
        return;
    }

    $('input[name=cbCheck]').val('true');

    $form.submit();
 
} 


function underAgeCheck() {
    alert("만 14세 미만의 아동의 경우 가입이 제한됩니다.");
    location.href = "http://www.abcmart.co.kr/abc/main";
}



//**step02***************


//회원가입버튼클릭시
function joinUser() {
	
	var userName = $('input[name=userName]').val();

	if($('input[name=userName]').val()==''){
		swal("Good job!", "You clicked the button!", "success");
		$('input[name=userName]').focus();
		swal('이름 항목을 입력해 주세요.');
		return;
	}else if(!/^[가-힣a-zA-Z]+$/.test(userName)) {
		$('input[name=userName]').focus();
		swal('이름은 한글 또는 영문으로 작성해 주세요.');
    	return;
	}
	
	var dateStr = $('input[name=userBirthDay]').val();

	if($('input[name=userBirthDay]').val()==''){
		swal('생년 월일을 입력해 주세요.');
		$('input[name=userBirthDay]').focus();
		return;
	}
		
	var year = Number(dateStr.substr(0,4)); 
	var month = Number(dateStr.substr(4,2));
	var day = Number(dateStr.substr(6,2));
	
	var today = new Date();
	var yearNow = today.getFullYear();
	var monthNow = today.getMonth()+1;
	var dayNow = today.getDate();
	
	if (monthNow < 10) monthNow = "0" + monthNow;
	if (dayNow < 10)   dayNow   = "0" + dayNow;
	
	var todayFmt = yearNow + "" + monthNow + "" + dayNow;
	
	if(dateStr == "" || todayFmt < dateStr || year < 1900 || year > yearNow) {
		  swal("생년월일을 정확하게 입력해 주시기 바랍니다.");
		  $('input[name=userBirthDay]').focus();
	    return;
	}
	if(month < 1 || month > 12) { 
		  swal("생년월일을 정확하게 입력해 주시기 바랍니다.");
		  $('input[name=userBirthDay]').focus();
	    return;
	}
	
	if(day < 1 || day > 31) {
		  swal("생년월일을 정확하게 입력해 주시기 바랍니다.");
		  $('input[name=userBirthDay]').focus();
	    return;
	}
	
	if((month==4 || month==6 || month==9 || month==11) && day==31) {
		  swal("생년월일을 정확하게 입력해 주시기 바랍니다.");
		  $('input[name=userBirthDay]').focus();
	    return;
	}
	
	if(month == 2) {
	    var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
	    if (day>29 || (day==29 && !isleap)) {
	  	  swal("생년월일을 정확하게 입력해 주시기 바랍니다.");
	  	  $('input[name=userBirthDay]').focus();
	        return;
	    }
	}
	
	var result = todayFmt - parseInt(dateStr) - 140000;
	if(result < 0) {
		  swal("만 14세 미만의 아동의 경우 가입이 제한됩니다.");
	    return;
	}
	
	
	/////////
	if($('input[name=userId]').val()==''){
		  swal("아이디를 입력해주세요");
		  $('input[name=userId]').focus();
		  return;
	}
	
	
	
	//비밀번호
	var userPwd = $('input[name=userPwd]').val();
	
	if($('input[name=userPwd]').val()==''){
		swal('비밀번호 항목을 입력해 주세요.');
	   $('input[name=userPwd]').focus();
	   return;
	}
	
	if($('input[name=userPwd2]').val()==''){
		swal('비밀번호 확인 항목을 입력해 주세요.');
	   $('input[name=userPwd]2').focus();
	   return;
	}

	
	//특문유효성
	var checkResult = pwd_check(userPwd);
	if(!checkResult){
		return;
	}
	
	
	//이메일 유효성
	if($('input[name=userEmail1]').val()==''){
		   swal("이메일을 입력해주세요");
		   return;
	}
	if($('input[name=userEmail2]').val()==''){
			swal("이메일을 입력해주세요");
		   return;
	}
	
	if($('input[name=handphoneNumber2]').val()==''){
		 	swal("핸드폰번호를 입력해주세요.");
		   return;
	}
	
	if($('input[name=handphoneNumber3]').val()==''){
			 swal("핸드폰번호를 입력해주세요.");
		   return;
	}
	
	
	//비밀번호 불일치시 회원가입안됨
	

      var userPwd = $('input[name=userPwd]').val();
      var userPwd2 = $('input[name=userPwd2]').val();

      
      if(userPwd!='' && userPwd2!=''){
    	  if(userPwd != userPwd2) {
    		swal("비밀번호가 일치하지않습니다.");
      	    return;
      	 }
      }

	
}

function pwd_check(userPwd) {
console.log("in");
 
  if( (userPwd.length<8) || (!userPwd.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~,-])|([!,@,#,$,%,^,&,*,?,_,~,-].*[a-zA-Z0-9])/)))  {
    alert("비밀번호는 영문(대소문자구분),숫자,특수문자(~!@#$%^&*()-_? 만 허용)를 혼용하여 8자 이상을 입력해주세요.");
    return false;
  }
  return true;
}





