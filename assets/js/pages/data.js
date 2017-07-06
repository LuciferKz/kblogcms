$(function(){

//   初始化单选
$(document).on("click",".icheckbox_square-blue",function(){
    var pp=$(this).hasClass("checked");
    if(pp==true){
        $(this).removeClass("checked");
    }else{
        $(this).addClass("checked");
    }
})


$(document).on("click", "#example2_body a", function (e) {
    e.stopPropagation();
    var databuildingid = $(this).parents("tr").attr("data-buildingid");
    window.location.href = "http://testcrm.ma3office.com/index.php/buildingv2/index?building_keyword=" + databuildingid;    
});


$(document).on("click", ".circles_wai", function (e) {
    e.stopPropagation();
    var pp = $(this).hasClass("circles_wai_selected");
    if (pp == true) {
        $(this).removeClass("circles_wai_selected");
    } else {
        $(this).addClass("circles_wai_selected");
    }
});

// sessionStorage
//获取详情
$(document).on("click", "#example2 tbody  tr", function () {    
    var if_shehe = $(this).find(".status").hasClass("status_no");
    var  dataid = $(this).attr("data-id");
    $("#myModal").attr("data-id",dataid);

    if (if_shehe == true) {
        $("#update_button1").show();
    } else {
        $("#update_button1").hide();
    }
})










})





