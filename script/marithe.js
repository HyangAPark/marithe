$(document).ready(function(){
// a href='#' 클릭 무시 스크립트
    $('a[href="#"]').click(function(ignore) {
        ignore.preventDefault();
    });

// header
    // scroll fix
    $("header").each(function(){
        let win = $(window);
        let header = $(this);
        let spot = header.offset().top;

        win.scroll(function(){
            if(win.scrollTop()>spot){
                header.addClass("fix")
            } else{
                header.removeClass("fix")
            }
        });
    });

    // ham-menu2
    $(".menu-lf").on('click',function(){
        $(this).toggleClass("active");
        $("#ham-menu").toggleClass("active");

        // .m-menu li 마우스오버&아웃시 색상변화
        $(".m-menu li:nth-child(1), .s-menu:nth-child(1) li").on('mouseover',function(){
            $(".m-menu>li:nth-child(2),.m-menu>li:nth-child(3),.m-menu>li:nth-child(4),.m-menu>li:nth-child(5),.m-menu>li:nth-child(6),.m-menu>li:nth-child(7)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".m-menu>li:nth-child(2),.m-menu>li:nth-child(3),.m-menu>li:nth-child(4),.m-menu>li:nth-child(5),.m-menu>li:nth-child(6),.m-menu>li:nth-child(7)").find("a").css({color:'#000'});
        });
        $(".m-menu li:nth-child(2), .s-menu:nth-child(2) li").on('mouseover',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(3),.m-menu>li:nth-child(4),.m-menu>li:nth-child(5),.m-menu>li:nth-child(6),.m-menu>li:nth-child(7)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(3),.m-menu>li:nth-child(4),.m-menu>li:nth-child(5),.m-menu>li:nth-child(6),.m-menu>li:nth-child(7)").find("a").css({color:'#000'});
        });
        $(".m-menu li:nth-child(3)").on('mouseover',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(2),.m-menu>li:nth-child(4),.m-menu>li:nth-child(5),.m-menu>li:nth-child(6),.m-menu>li:nth-child(7)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(2),.m-menu>li:nth-child(4),.m-menu>li:nth-child(5),.m-menu>li:nth-child(6),.m-menu>li:nth-child(7)").find("a").css({color:'#000'});
        });
        $(".m-menu li:nth-child(4), .s-menu:nth-child(3) li").on('mouseover',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(2),.m-menu>li:nth-child(3),.m-menu>li:nth-child(5),.m-menu>li:nth-child(6),.m-menu>li:nth-child(7)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(2),.m-menu>li:nth-child(3),.m-menu>li:nth-child(5),.m-menu>li:nth-child(6),.m-menu>li:nth-child(7)").find("a").css({color:'#000'});
        });
        $(".m-menu li:nth-child(5)").on('mouseover',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(2),.m-menu>li:nth-child(3),.m-menu>li:nth-child(4),.m-menu>li:nth-child(6),.m-menu>li:nth-child(7)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(2),.m-menu>li:nth-child(3),.m-menu>li:nth-child(4),.m-menu>li:nth-child(6),.m-menu>li:nth-child(7)").find("a").css({color:'#000'});
        });
        $(".m-menu li:nth-child(6)").on('mouseover',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(2),.m-menu>li:nth-child(3),.m-menu>li:nth-child(4),.m-menu>li:nth-child(5),.m-menu>li:nth-child(7)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(2),.m-menu>li:nth-child(3),.m-menu>li:nth-child(4),.m-menu>li:nth-child(5),.m-menu>li:nth-child(7)").find("a").css({color:'#000'});
        });
        $(".m-menu li:nth-child(7)").on('mouseover',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(2),.m-menu>li:nth-child(3),.m-menu>li:nth-child(4),.m-menu>li:nth-child(5),.m-menu>li:nth-child(6)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".m-menu>li:nth-child(1),.m-menu>li:nth-child(2),.m-menu>li:nth-child(3),.m-menu>li:nth-child(4),.m-menu>li:nth-child(5),.m-menu>li:nth-child(6)").find("a").css({color:'#000'});
        });
        // .s-menu li 마우스오버&아웃시 색상변화
        $(".s-menu>li:nth-child(1)").on('mouseover',function(){
            $(".s-menu>li:nth-child(2),.s-menu>li:nth-child(3),.s-menu>li:nth-child(4),.s-menu>li:nth-child(5),.s-menu>li:nth-child(6)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".s-menu>li:nth-child(2),.s-menu>li:nth-child(3),.s-menu>li:nth-child(4),.s-menu>li:nth-child(5),.s-menu>li:nth-child(6)").find("a").css({color:'#000'});
        });
        $(".s-menu>li:nth-child(2)").on('mouseover',function(){
            $(".s-menu>li:nth-child(1),.s-menu>li:nth-child(3),.s-menu>li:nth-child(4),.s-menu>li:nth-child(5),.s-menu>li:nth-child(6)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".s-menu>li:nth-child(1),.s-menu>li:nth-child(3),.s-menu>li:nth-child(4),.s-menu>li:nth-child(5),.s-menu>li:nth-child(6)").find("a").css({color:'#000'});
        });
        $(".s-menu>li:nth-child(3)").on('mouseover',function(){
            $(".s-menu>li:nth-child(1),.s-menu>li:nth-child(2),.s-menu>li:nth-child(4),.s-menu>li:nth-child(5),.s-menu>li:nth-child(6)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".s-menu>li:nth-child(1),.s-menu>li:nth-child(2),.s-menu>li:nth-child(4),.s-menu>li:nth-child(5),.s-menu>li:nth-child(6)").find("a").css({color:'#000'});
        });
        $(".s-menu>li:nth-child(4)").on('mouseover',function(){
            $(".s-menu>li:nth-child(1),.s-menu>li:nth-child(2),.s-menu>li:nth-child(3),.s-menu>li:nth-child(5),.s-menu>li:nth-child(6)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".s-menu>li:nth-child(1),.s-menu>li:nth-child(2),.s-menu>li:nth-child(3),.s-menu>li:nth-child(5),.s-menu>li:nth-child(6)").find("a").css({color:'#000'});
        });
        $(".s-menu>li:nth-child(5)").on('mouseover',function(){
            $(".s-menu>li:nth-child(1),.s-menu>li:nth-child(2),.s-menu>li:nth-child(3),.s-menu>li:nth-child(4),.s-menu>li:nth-child(6)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".s-menu>li:nth-child(1),.s-menu>li:nth-child(2),.s-menu>li:nth-child(3),.s-menu>li:nth-child(4),.s-menu>li:nth-child(6)").find("a").css({color:'#000'});
        });
        $(".s-menu>li:nth-child(6)").on('mouseover',function(){
            $(".s-menu>li:nth-child(1),.s-menu>li:nth-child(2),.s-menu>li:nth-child(3),.s-menu>li:nth-child(4),.s-menu>li:nth-child(5)").find("a").css({color:'#9A9A9A'});
        })
        .on('mouseout',function(){
            $(".s-menu>li:nth-child(1),.s-menu>li:nth-child(2),.s-menu>li:nth-child(3),.s-menu>li:nth-child(4),.s-menu>li:nth-child(5)").find("a").css({color:'#000'});
        });

        // .s-menu 드롭다운
        $(".m-menu .m-li").on('mouseover',function(){
            $(this).find(".s-menu1").stop(true).slideDown();
            $(this).find(".flex").find(".li-plus").show();
        })
        .on('mouseout',function(){
            $(this).find(".s-menu1").stop(true).slideUp();
            $(this).find(".flex").find(".li-plus").hide();
        })
        $(".m-menu .m-li").on('mouseover',function(){
            $(this).find(".s-menu2").stop(true).slideDown();
            $(this).find(".flex").find(".li-plus").show();
        })
        .on('mouseout',function(){
            $(this).find(".s-menu2").stop(true).slideUp();
            $(this).find(".flex").find(".li-plus").hide();
        })
        $(".m-menu .m-li").on('mouseover',function(){
            $(this).find(".s-menu4").stop(true).slideDown();
            $(this).find(".flex").find(".li-plus").show();
        })
        .on('mouseout',function(){
            $(this).find(".s-menu4").stop(true).slideUp();
            $(this).find(".flex").find(".li-plus").hide();
        })
    });
// header

// main
    // slide
    var swiper = new Swiper(".main", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
// main

// section1
    //part 이미지 교체
    $(".p-part:nth-child(2)").hide();
    $(".p-part:nth-child(3)").hide();
    $(".pick:nth-child(2)").hide();
    $(".pick:nth-child(3)").hide();
    // part 클릭시 해당 slide 보이면서 해당 part 글자색 변경
    $("#section1 .tab ul li").click(function(){
        const i = $(this).index();
        console.log(i);

        // 클릭했을 때 모든 active 제거하고 클릭한 li만 active
        $(".tab ul li").find("a").removeClass("active");
        $(this).find("a").addClass("active");

        $(".p-part").hide();
        $(".p-part").eq(i).show();
        $(".pick").hide();
        $(".pick").eq(i).show();
        console.log(i);
    });
// section1

// section2
    $("#section2 .btn").find("a").click(function(){
        $("#section2 .btn1").hide();
        $("#section2 .btn2").css({
            display:'block',
            backgroundColor:'#fff',
            color:'#000'
        });
    });
// //section2

// banner
    // 배너 slide
    var swiper = new Swiper(".banner", {
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
      });
// banner

// section4
    // 버튼 클릭시 사진 확대
    $("#section4 .btn1").click(function(){
        $(this).toggleClass("active");
        $("#section4 .box .b-inner:nth-child(1) .img").find("img").css({
            transform: 'scale(1.025)',
            transitionDelay: '200',
            transitionTimingFunction: 'easeInOut'
        });
        $("#section4 .btn2").removeClass("active");
        $("#section4 .box .b-inner:nth-child(2) .img").find("img").css({
            transform: 'scale(1)',
            transitionDelay: '200',
            transitionTimingFunction: 'easeInOut'
        });
        $("#section4 .btn1-1").hide();
        $("#section4 .btn1-2").css({
            display:'block',
            backgroundColor:'#fff',
            color:'#000'
        });
    });
    $("#section4 .btn2").click(function(){
        $(this).toggleClass("active");
        $("#section4 .box .b-inner:nth-child(2) .img").find("img").css({
            transform: 'scale(1.025)',
            transitionDelay: '200',
            transitionTimingFunction: 'easeInOut'
        });
        $("#section4 .btn1").removeClass("active");
        $("#section4 .box .b-inner:nth-child(1) .img").find("img").css({
            transform: 'scale(1)',
            transitionDelay: '200',
            transitionTimingFunction: 'easeInOut'
        });
        $("#section4 .btn2-1").hide();
        $("#section4 .btn2-2").css({
            display:'block',
            backgroundColor:'#fff',
            color:'#000'
        });
    });
// section4

// scrollTop
    // 스크롤 show
    $(window).scroll(function(){
        if($(this).scrollTop()<100){
            $("#scroll").stop(true).css({display:'none'})
        } else{
            $("#scroll").stop(true).css({display:'block'})
        }
    });
    // 버튼 클릭시 상단으로 이동
    $("#scroll button").click(function(){
        $(window).scrollTop(0);
    });
// scrollTop
});