
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});


	$('#logout').click(function () {
		$.ajax({
			type: 'post',
			url: '/api/logout',
			dataType: 'json',
			success: function(data) {
				if(data.code == 200) {
					location.href = '/login';
				}
			}
		})
	})

	var flag = $.cookie('PHPSESSID');
	if(!flag) {
		//���cookie�����ڣ���ת����½ҳ
		location.href = '/main/login';
	}

	//���û���Ϣ�洢��indexҳ��
	var loginInfo = $.cookie('loginInfo');
	loginInfo = loginInfo && JSON.parse(loginInfo);

	$('.aside .profile img').attr('src',loginInfo.tc_avatar);
	$('.aside .profile h4').html(loginInfo.tc_name);
