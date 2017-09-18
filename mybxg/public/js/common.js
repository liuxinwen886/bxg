
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
		//如果cookie不存在，跳转到登陆页
		location.href = '/main/login';
	}

	//将用户信息存储到index页面
	var loginInfo = $.cookie('loginInfo');
	loginInfo = loginInfo && JSON.parse(loginInfo);

	$('.aside .profile img').attr('src',loginInfo.tc_avatar);
	$('.aside .profile h4').html(loginInfo.tc_name);
