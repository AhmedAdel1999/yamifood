$(document).ready(function(){
    //this code to slidetoggle the header box
    $(".header>.container-fluid>div:nth-of-type(1)>.container>div").on("click",function(){
        if($(window).width()<=992){
            $(".header>.container-fluid>div:nth-of-type(2)").slideToggle(400)
        }
        });
        $(window).on("resize",function(){
            if($(window).width()>=992){
                $(".header>.container-fluid>div:nth-of-type(2)").css({"display":"flex"});
            }  
            else{
                $(".header>.container-fluid>div:nth-of-type(2)").css({"display":"none"});
            }  
        });

        $(window).on("scroll",function(){
            if($(window).scrollTop()>=400){
                $(".fix").fadeIn(200).css({"display":"flex","aline-items":"center"});
            }
            else{
                $(".fix").fadeOut(200)
            }
        });
        
        
        //the end of heading code 
    
        //this code for the slider 
            $(".slides").slick({
                prevArrow:".slider .container-fluid .prev",
                nextArrow:".slider .container-fluid .next",
                dots: true,
                infinite: true,
                speed: 1000,
                fade: true,
                cssEase: 'linear',
                autoplay:true
            });
        //the end of slider code
        //the start code of menu
        $(".all").on("click",function(){
            $(".drinks,.lunch,.dinner").fadeIn();
            $(this).addClass("decor");
            $(".drinkss,.lunchs,.dinners").removeClass("decor");
        });
        $(".drinkss").on("click",function(){
            $(".drinks").fadeIn();
            $(".lunch,.dinner").fadeOut();
            $(this).addClass("decor");
            $(".all,.lunchs,.dinners").removeClass("decor");
        });
        $(".lunchs").on("click",function(){
            $(".lunch").fadeIn();
            $(".drinks,.dinner").fadeOut();
            $(this).addClass("decor");
            $(".all,.drinkss,.dinners").removeClass("decor");
        });
        $(".dinners").on("click",function(){
            $(".dinner").fadeIn();
            $(".drinks,.lunch").fadeOut();
            $(this).addClass("decor");
            $(".all,.lunchs,.drinkss").removeClass("decor");
        });
        //the end code of menu
    
        $(".customer .information").slick({
            prevArrow:".customer .container .row .prev",
            nextArrow:".customer .container .row .next",
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 4000
        });

        $(".fix").on("click",function(){
            $("html,body").animate({
               scrollTop:$(".slider,.main-contact,.main-blog,.main-gallery,.main-about,.main-menu,.main-stuff,.main-reservition").offset().top 
            },500)
        });

        $(".footer .container .four>div>form>input:nth-of-type(1)").on("keypress",function(){
            $(this).css({"color":"#fff"});
        });

        $(".contact-box .container .row .second>form>div").find("input,textarea").on("blur",function(){
            if($(this).val().length==0){
                $(this).next("span").css({"display":"block"});
            }
        });
        $(".form-input .one div,.form-input .two div").find("input,select").on("blur",function(){
            if($(this).val().length==0){
                $(this).next("span").css({"display":"block"});
            }
        });
        

        $(".stuff-box .parent .img-box").on("mouseenter",function(){
            $(this).find(".stuff-info").fadeIn()
            $(this).find(".child1").css({"transform":"scalex(2)"});
            $(this).find(".child2").css({"transform":"scaley(2)"})
        });
        $(".stuff-box .parent .img-box").on("mouseleave",function(){
            $(this).find(".stuff-info").fadeOut()
            $(this).find(".child1").css({"transform":"scalex(1)"});
            $(this).find(".child2").css({"transform":"scalex(1)"});
        });
});