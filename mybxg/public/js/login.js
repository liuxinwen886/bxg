define(['jquery','cookie'], function ($) {
    $('#loginBtn').click(function(){
        $.ajax({
            type : 'post',
            url : '/api/login',
            data : $("#loginForm").serialize(),
            dataType : 'json',
            success : function(data){
                if(data.code == 200) {
                    //将登陆信息存储在cookie 中
                    //$.cookie('name', 'value', { expires: 7, path: '/' });  创建一个cookie
                    //loginInfo 名字  cookie值转成字符串
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href = '/main/index';
                }
            }
        });
        return false;  // 阻止按钮的默认行为
    });
})
