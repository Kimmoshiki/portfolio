// let pageable = new Pageable("#container");
$(document).ready(function(){

    // $('#main').fullpage({
    //     anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
    //     css3:false,
    //     // responsiveWidth: 768,
    //     afterLoad:function(origin, destination, direction){
    //         let idx=destination.index;
    //         sc.eq(idx).addClass('on').siblings().removeClass('on');
    //         sideBar.eq(idx).addClass('on').siblings().removeClass('on');
    //     },
    // });


    let c_btn = $('.c_btn_box >ul >li');//메인메뉴 변수
    let gnb = $('.gnb > li')

    // 타이틀나오게하기
    $('.main_bg .m_txt_box').animate({'top':'0px'},3000,'easeOutCirc');


     // 메뉴나오게하기
     $('.fa-bars').click(function(){
        $('.gnb_wrap').animate({'top':'0px'},700);
        $('.fa-times').stop().animate({'opacity':'1'},500).animate({'top':'20px'},300);
    });
    $('.fa-times').click(function(){
        $('.gnb_wrap').animate({'top':'-1200px'},1500);
        $(this).animate({'opacity':'0'},1000).animate({'top':'-100px'},1200);
    });


    // 컨트롤버튼
    $('.c_btn_box > ul > li > .con_btn').click(function(){
        $('.c_btn_box ul li .con_btn').removeClass('on');
        $(this).addClass('on');
    });


    // 내비세이션 각각 클릭시 해당 기능 삽입하기
    c_btn.click(function(){
            let i = $(this).index();
            console.log(i);

            $('html ,body').animate({scrollTop:$('main section').eq(i).offset().top},500,'easeOutCirc');
    });


    // 스크롤 애니메이션
    $(window).scroll(function(){

        let sPos = $(this).scrollTop();
        console.log(sPos);

            $('section').each(function(i){
        let top = $(this).offset().top-400;//선택한 section의 위치값을 변수에 저장

        if(sPos>=top){//section태그가 위에서 떨어진 값이 스크롤값보다 크면
            gnb.find('li').removeClass('on');//기존서식을 제거하고
            gnb.eq(i).find('li').addClass('on');//해당 a에만 서식 적용
        };
    });

        if(sPos>=100){
            $('.c_btn_box ul li .con_btn').removeClass('on');
            $('.c_btn_box > ul > li:first-child > .con_btn').addClass('on');
        }
        if(sPos>=300){
            $('.profile .p_inner .p_left_box').animate({'opacity':'1'},1000);
            $('.profile .p_inner .p_right_box .p_text_box p').animate({'opacity':'1'},2500);
        }
        if(sPos>=350){
            $('.skill .bar_wrap .html').animate({'width':'85%'},1500);
            $('.skill .bar_wrap .css').animate({'width':'80%'},1800);
            $('.skill .bar_wrap .js').animate({'width':'60%'},2200);
            $('.skill .bar_wrap .ps').animate({'width':'75%'},2500);
            $('.skill .bar_wrap .ai').animate({'width':'85%'},3000);
        }

        if(sPos>=500){
            $('a.top_btn').animate({'opacity':'1'},500);
        }

        if(sPos>=650){
            $('.c_btn_box ul li .con_btn').removeClass('on');
            $('.c_btn_box > ul > li:nth-child(2) > .con_btn').addClass('on');
        }
        if(sPos>=1600){
            $('.c_btn_box ul li .con_btn').removeClass('on');
            $('.c_btn_box > ul > li:nth-child(3) > .con_btn').addClass('on');
            $('.projecet01 .project-right .right_box').animate({'right':'0px'},800);
            $('.projecet01 .project-right .p_img_box01').animate({'left':'0px'},1500);
            $('.projecet01 .project-right .text_box').delay(1500).animate({'opacity':'1'},1000);
        }
        if(sPos>=2600){
            $('.c_btn_box ul li .con_btn').removeClass('on');
            $('.c_btn_box > ul > li:nth-child(4) > .con_btn').addClass('on');
            $('.projecet02 .project-left .right_box').animate({'left':'0px'},800);
            $('.projecet02 .project-left .p_img_box01').animate({'right':'0px'},1500);
            $('.projecet02 .project-left .text_box').delay(1500).animate({'opacity':'1'},1000);
        }
        if(sPos>=3500){
            $('.c_btn_box ul li .con_btn').removeClass('on');
            $('.c_btn_box > ul > li:last-child > .con_btn').addClass('on');
            $('.projecet03 .project-right .right_box').animate({'right':'0px'},800);
            $('.projecet03 .project-right .p_img_box01').animate({'left':'0px'},1500);
            $('.projecet03 .project-right .text_box').delay(1500).animate({'opacity':'1'},1000);
        }
    });

    gnb.click(function(){
        $('.gnb_wrap').animate({'top':'-1200px'},1500);
        $('.fa-times').animate({'opacity':'0'},1000).animate({'top':'-100px'},1200);

        let i = $(this).index();
            console.log(i);

            $('html ,body').animate({scrollTop:$('main section').eq(i).offset().top},500,'easeOutCirc');

});
    // 탑버튼
    $('.top_btn').click(function(){
        $('html ,body').animate({scrollTop:$('main section').eq(0).offset().top},500,'easeOutCirc');
    });

});