/**
 * Created by tutu on 14-10-19.
 */
$("body").append("<div class='menuContainer'></div>")
$.ajax({
    url:"menuT.html",
    type:"GET",
    dataType:"html",
    success:function(data){
        $(".menuContainer").append(data);
    }
})