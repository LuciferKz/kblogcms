 $(function(){       

                //清空数据
                function qingkong() {
                    $("input[name='action_name']").val("");
                    $("input[name='point']").val("");
                    $("input[name='beizhu']").val("");
                }

                //编辑出线弹窗
                $(document).on("click", ".edit", function () {
                    qingkong();
                    var dataid = $(this).parents("tr").attr("data-id");
                    $("#myModal2").attr("data-id", dataid);
                    var action_name = $(this).parents("tr").find("td").eq(0).text();
                    var point = $(this).parents("tr").find("input").val();
                    var beizhu = $(this).parents("tr").find("td").eq(2).text();
                    $("#myModal2 input[name='action_name']").val(action_name);
                    $("#myModal2 input[name='point']").val(point);
                    $("#myModal2 input[name='beizhu']").val(beizhu);
                    $("#myModal2").show();
                });


              
 })

              