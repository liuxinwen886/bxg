require.config({
    baseUrl : '/public/assets',  //主路径
    paths : {
    /*分路径*/
        jquery : 'jquery/jquery.min',
        cookie : 'jquery-cookie/jquery.cookie',
        template : 'artTemplate/template-web',
        bootstrap : 'bootstrap/js/bootstrap.min',
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate : 'validate/jquery-validate',
        form : 'jquery-form/jquery.form',
        ckeditor : 'ckeditor/ckeditor',
        until : '../js/until',
        common : '../js/common',
        login : '../js/login',
        uploadify : 'uploadify/jquery.uploadify.min',
        region : 'jquery-region/jquery.region',
        teacherlist : '../js/teacher-list',
        teacheradd : '../js/teacher-add',
        settings : '../js/settings'
    },
    //标准化
    shim : {
        bootstrap : {
            deps : ['jquery']
        },
        language : {
            deps : ['jquery','datepicker']
        },
        validate : {
            deps : ['jquery']
        },
        uploadify : {
            deps : ['jquery']
        },
        ckeditor : {
            exports : 'CKEDITOR'
        }
    }
})