$(".forward").hover(function(){
    $("#forward-img").hide();
    $("#forward-hover-img").show();
});

$(".forward").mouseleave(function() {
    $("#forward-img").show();
    $("#forward-hover-img").hide();
});

$(".back").hover(function(){
    $("#back-img").hide();
    $("#back-hover-img").show();
});

$(".back").mouseleave(function() {
    $("#back-img").show();
    $("#back-hover-img").hide();
});


