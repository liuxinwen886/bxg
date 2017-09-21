require.config({
    baseUrl : '/public/assets',  //主路径
    paths : {
    /*分路径*/
        jquery : 'jquery/jquery.min',
        cookie : 'jquery-cookie/jquery.cookie',
        template : 'artTemplate/template-web',
        bootstrap : 'bootstrap/js/bootstrap.min',
        common : '../js/common',
        login : '../js/login',
        teacherlist : '../js/teacher-list'
    },
    shim : {
        bootstrap : {
            deps : ['jquery']
        }
    }
})