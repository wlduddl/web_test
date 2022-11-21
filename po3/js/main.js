$(".btnMenu").click(function(){
    $(".blackBg").fadeIn(300);
    $(".gnb").animate({
        right:0
    },300);
});

$(".closeMenu, .blackBg").click(function(){
    $(".blackBg").fadeOut(300);
    $(".gnb").animate({
        right:-500
    },300);
 });


// 3) 모바일 사이드 아코디언메뉴
        $(".gnb li .m").click(function(){
        // 1) 현재 내가 클릭한 대상과 짝이되는 .sub를 변수에 저장
            var tg=$(this).siblings(".sub");
        // 2) 변수 tg의 display 속성값을 변수에 저장.
            var dis=tg.css("display");
        // 3)  if조건문 : 만약 변수dis와 block이 같다면~
        // (= 짝이 되는 sub영역이 보이고 있다면~)
            if(dis=="block"){
                $(this).removeClass("on");   
                tg.slideUp(300);
            }
        // 4) 만약 변수 dis와 none이 같다면~
        // (= 짝이 되는 sub영역이 닫혀있다면~)
            if(dis=="none"){
                $(".gnb li m").removeClass("on");
                $(this).addClass("on");
                $(".gnb li sub").slideUp(300);
                tg.slideDown(300);
            };
            return false;
        });
        