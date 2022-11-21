$(".gnb").mouseover(function(){
    $(this).stop().animate({
        height:210
    },500);
    $(".subBg").stop().animate({
        height:210
    },500)
}).mouseout(function(){
    $(this).stop().animate({
        height:40
    },500);
    $(".subBg").stop().animate({
        height:0
    },500)
})

$('#mainSlider ul').bxSlider({
  auto: true,
  controls :true,
  autoControls: false,
  stopAutoOnClick: false,
    });