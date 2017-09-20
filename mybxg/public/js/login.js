define(['jquery','cookie'], function ($) {
    $('#loginBtn').click(function(){
        $.ajax({
            type : 'post',
            url : '/api/login',
            data : $("#loginForm").serialize(),
            dataType : 'json',
            success : function(data){
                if(data.code == 200) {
                    //����½��Ϣ�洢��cookie ��
                    //$.cookie('name', 'value', { expires: 7, path: '/' });  ����һ��cookie
                    //loginInfo ����  cookieֵת���ַ���
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href = '/main/index';
                }
            }
        });
        return false;  // ��ֹ��ť��Ĭ����Ϊ
    });
})
