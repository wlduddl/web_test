$(".gnb").mouseover(function(){
    $(this).stop().animate({
        height:330
    },300);
    $(".subBg").stop().animate({
        height:330
    },300)
}).mouseout(function(){
    $(this).stop().animate({
        height:40
    },300);
    $(".subBg").stop().animate({
        height:0
    },300)
})

$('#mainSlider ul').bxSlider({
  auto: true,
  controls :false,
  autoControls: false,
  stopAutoOnClick: false,
    });