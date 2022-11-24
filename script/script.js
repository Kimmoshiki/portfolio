$(document).ready(function(){

    $('.gnb li:last-child').hover(function(){
        $('.sub').stop().slideDown();
    },function(){
        $('.sub').stop().slideUp();
    });

    $('#intro > h2').animate({'opacity':'1'},700).animate({'top':'38%'},1500);
    $('#intro > p').delay(1000).animate({'opacity':'1'},700).animate({'top':'52%'},1000);
    $('#intro > .item01').delay(1900).animate({'opacity':'1'},1000);

    $('.gnb li a').click(function(){
        $('.gnb > li a').removeClass('on');
        $(this).addClass('on');
        // return;
    })

    // 내비게이션
    /* 탭 클릭 */
  $('.gnb li a').on('click',function(){
    var anchorId = $(this).attr('data-anchor');
    // 스크롤 이동
    scroll_to_anchor_tab(anchorId);
    });
  $('.gnb li .sub li a').on('click',function(){
    var anchorId02 = $(this).attr('data-anchor');
    // 스크롤 이동
    scroll_to_anchor_tab(anchorId02);
    });
  // 탭 이동 - 부드러운 스크롤
     function scroll_to_anchor_tab(anchor_id,speed) {
         if( !speed ) var speed = 'slow';
         var a_tag = $("#"+anchor_id);
         if(a_tag.length > 0){
             $('html, body').animate({
                 scrollTop: a_tag.offset().top - $('').height() -  $('').height() // 상단에 특정 위치를 제외하고 스크롤할때 해당 이름 작성
             }, speed);
         }};
    

    // 스크롤 이벤트
    $(window).scroll(function(){
        let sPos = $(this).scrollTop();
        console.log(sPos);

        $('.gnb li:first-child').click(function(){
            $('.gnb > li a').removeClass('on');
            $('.gnb > li:first-child a').addClass('on');
            
        });

        // 프로필
        if(sPos>=100){
            $('.gnb > li a').removeClass('on');
            $('.gnb li:first-child a').addClass('on');
        }
        if(sPos>=900){
            $('.gnb > li a').removeClass('on');
            $('.gnb > li:nth-child(2) > a').addClass('on');
            $('.profile .p_left_box').animate({'opacity':'1'},800).animate({'left':'0px'},800);
            // 스펙
            $('.profile_box .p_text_box:first-child').delay(1000).animate({'opacity':'1'},800).animate({'left':'390px'},800);
            $('.profile_box .p_text_box:nth-child(2)').delay(1400).animate({'opacity':'1'},800).animate({'left':'390px'},800);
            $('.profile_box .p_text_box:last-child').delay(1800).animate({'opacity':'1'},800).animate({'left':'390px'},800);
            // 스킬바
            $('.p_skill_box').delay(2000).animate({'opacity':'1'},800).animate({'right':'0px'},800);
            $('.skill .bar_wrap .html').delay(3000).animate({'width':'85%'},1500);
            $('.skill .bar_wrap .css').delay(3000).animate({'width':'80%'},1800);
            $('.skill .bar_wrap .js').delay(3000).animate({'width':'60%'},2200);
            $('.skill .bar_wrap .ps').delay(3000).animate({'width':'75%'},2500);
            $('.skill .bar_wrap .ai').delay(3000).animate({'width':'85%'},3000);
            $('.skill .bar_wrap .Figma').delay(3000).animate({'width':'85%'},3500);
        }
        if(sPos>=1800){ //프로젝트
            $('.gnb > li a').removeClass('on');
            $('.gnb > li:last-child > a').addClass('on');
            $('#project01 > .con > img').animate({'opacity':'1'},1500).animate({'top':'0px'},1000);
            $('#project01 .btn').animate({'opacity':'1'},700).animate({'top':'650px'},700);
            $('#project01 .pro_title').delay(1000).animate({'opacity':'1'},700).animate({'left':'80px'},500);
            $('#project01 .c_txtbox01').delay(1000).animate({'opacity':'1'},700).animate({'left':'95px'},1000);
            $('#project01 .c_txtbox02').delay(1000).animate({'opacity':'1'},700).animate({'left':'95px'},1500);
            $('#project01 .c_txtbox03').delay(1000).animate({'opacity':'1'},700).animate({'left':'95px'},1800);
            $('#project01 .c_txtbox04').delay(1000).animate({'opacity':'1'},700).animate({'left':'95px'},2000);
        }
        if(sPos>=3000){
            $('#project02 > .con > img').animate({'opacity':'1'},1500).animate({'top':'0px'},1000);
            $('#project02 .btn').animate({'opacity':'1'},700).animate({'top':'650px'},700);
            $('#project02 .pro_title').delay(1000).animate({'opacity':'1'},700).animate({'right':'160px'},500);
            $('#project02 .c_txtbox01').delay(1000).animate({'opacity':'1'},700).animate({'right':'245px'},1000);
            $('#project02 .c_txtbox02').delay(1000).animate({'opacity':'1'},700).animate({'right':'245px'},1500);
            $('#project02 .c_txtbox03').delay(1000).animate({'opacity':'1'},700).animate({'right':'245px'},1800);
            $('#project02 .c_txtbox04').delay(1000).animate({'opacity':'1'},700).animate({'right':'155px'},2000);
        }
        if(sPos>=4100){
            $('#project03 > .con > img').animate({'opacity':'1'},1500).animate({'top':'0px'},1000);
            $('#project03 .btn').animate({'opacity':'1'},700).animate({'top':'600px'},700);
            $('#project03 .pro_title').delay(1000).animate({'opacity':'1'},700).animate({'left':'80px'},500);
            $('#project03 .c_txtbox01').delay(1000).animate({'opacity':'1'},700).animate({'left':'95px'},1000);
            $('#project03 .c_txtbox02').delay(1000).animate({'opacity':'1'},700).animate({'left':'95px'},1500);
            $('#project03 .c_txtbox03').delay(1000).animate({'opacity':'1'},700).animate({'left':'95px'},1800);
            $('#project03 .c_txtbox04').delay(1000).animate({'opacity':'1'},700).animate({'left':'95px'},2000);
        }
        if(sPos>=5200){
            $('#project04 > .con > img').animate({'opacity':'1'},1500).animate({'top':'0px'},1000);
            $('#project04 .btn').animate({'opacity':'1'},700).animate({'top':'650px'},700);
            $('#project04 .pro_title').delay(1000).animate({'opacity':'1'},700).animate({'right':'160px'},500);
            $('#project04 .c_txtbox01').delay(1000).animate({'opacity':'1'},700).animate({'right':'245px'},1000);
            $('#project04 .c_txtbox02').delay(1000).animate({'opacity':'1'},700).animate({'right':'245px'},1500);
            $('#project04 .c_txtbox03').delay(1000).animate({'opacity':'1'},700).animate({'right':'245px'},1800);
            $('#project04 .c_txtbox04').delay(1000).animate({'opacity':'1'},700).animate({'right':'155px'},2000);
        }
    });
});

const content = "' 도전과 실패는 성장을 위한 수업료 '     ";
const text = document.querySelector('.text');

let index = 0;

function typing(){
    text.textContent += content [index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
    }
}

setInterval(typing, 250);
// setTimeout(typing(), 200);
