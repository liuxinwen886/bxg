define(['jquery', 'template','bootstrap'], function ($, template) {
    //用接口获取所有讲师数据
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        dataType: 'json',
        success: function (data) {
            var html = template('teacherTpl', {list: data.result});
            $("#teacherInfo").html(html);
            //点击切换注销账号
            $(".eod").click(function () {
                var that = this;
                //closest 查找最近父元素
                var td = $(this).closest("td");
                var tcId = td.attr("data-tcId");
                var Status = td.attr("data-status");
                $.ajax({
                    type: "post",
                    url: "/api/teacher/handle",
                    data: {tc_id: tcId, tc_status: Status},
                    dataType: "json",
                    success: function (data) {
                        if (data.code == 200) {
                            td.attr("data-status", data.result.tc_status);
                            if (data.result.tc_status == 0) {
                                $(that).text("注销");
                            } else {
                                $(that).text("启用");
                            }
                        }
                    }
                })
            });

            //点击按钮查看
            $(".preview").click(function () {
                var td = $(this).closest("td");
                var tcId = td.attr("data-tcId");
                $.ajax({
                    type: "get",
                    url: "/api/teacher/view",
                    data: {tc_id: tcId},
                    dataType: "json",
                    success: function (data) {
                        var html = template("modalTpl",data.result);
                        $("#modalInfo").html(html);
                        $("#teacherModal").modal();
                    }
                })
            });
        }
    });
});
