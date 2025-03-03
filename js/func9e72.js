$(function() {
    var body = $("body");
    setTimeout(function () {
        $("#page").fadeIn(500);
    }, 500);
    setTimeout(function () {
        body.addClass('drawLine');
    }, 1000);
    setTimeout(function () {
        body.addClass('deatShow');
    }, 1500);
    setTimeout(function () {
        body.addClass('logoShow');
    }, 1750);
    setTimeout(function () {
        body.addClass('overShow');
    }, 2500);
    
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

    $(".signUp").click(function (e) {
        e.preventDefault();
        // $(this).text(function (i, text) {
        //     return text === "Sign Up" ? "Close" : "Sign Up";
        // });

        $(".signUpForm").addClass('show');
        body.addClass('signUpActive');
        $(".closeBut").fadeIn();
        
    });
    
    if (location.href.indexOf("#signUp") != -1) {
        $(".signUpForm").addClass('show');
        body.addClass('signUpActive');
        $(".closeBut").fadeIn();
    }
    if (location.href.indexOf("#signup") != -1) {
        $(".signUpForm").addClass('show');
        body.addClass('signUpActive');
        $(".closeBut").fadeIn();
    }

    $(".closeBut").click(function () {
        $(".signUpForm").removeClass('show');
        body.removeClass('signUpActive');
        $(this).fadeOut();
        
    });
    
    if (!$("#page").hasClass('socialP')) {
        gsap.registerPlugin(ScrollTrigger);

        let tla = gsap.timeline({
            scrollTrigger: {
                trigger: ".logoType",
                pin: false,
                markers:false,
                start: "bottom+=50vh center",
                end: "bottom+=500 center",
                scrub: 1,
                
            },
        });
        tla.addLabel("start").to(".over", {
            marginTop: 10+'vh',
            paddingTop: 10+'vw'
        });
        tla.addLabel("start").to(".ltf", {
            opacity: 1
        });
        let tlb = gsap.timeline({
            scrollTrigger: {
                trigger: ".bgImg",
                pin: false,
                markers:false,
                start: "center center",
                end: "bottom-=25vh center",
                scrub: 0.2
            },
        });
        tlb.addLabel("start").to(".orig", {
            opacity: 0,
        });

        let tlc = gsap.timeline({
            scrollTrigger: {
                trigger: ".logoType",
                pin: false,
                markers: false,
                start: "bottom+=50vh center",
                end: "bottom+=1000 center",
                scrub: 1,
                
            },
        });
    
        tlc.addLabel("start").to(".video", {
            width:50+'%'
        });
    } 

  
	
});
