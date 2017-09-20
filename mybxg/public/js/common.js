define(['jquery','template','cookie'], function ($,template) {
	//NProgress.start();
    //
	//NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//实现退出功能
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
	//验证用户是否登陆了
	//var flag = $.cookie('PHPSESSID');
	//if(!flag && location.pathname != '/main/login') {
	//	//如果cookie不存在，跳转到登陆页
	//	location.href = '/main/login';
	//}
	var flag = $.cookie('PHPSESSID');
	if(!flag && location.pathname != '/main/login'){
		location.href = '/main/login';
	}


	//填充头像信息
	var loginInfo = $.cookie('loginInfo');
	loginInfo = loginInfo && JSON.parse(loginInfo);
	var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
	var html = template.render(tpl,loginInfo);  //页面渲染第二种方法
	$(".aside .profile").html(html);
	//$('.aside .profile img').attr('src',loginInfo.tc_avatar);
	//$('.aside .profile h4').html(loginInfo.tc_name);

})
