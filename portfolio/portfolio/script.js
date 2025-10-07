$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        } else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    var typed = new Typed(".typing", {
        strings: ["Back-end web developer", "Front-end web developer", "HTML5-CSS3-JAVAScript-jQuery-Node JS Coder", "Full-stack developer", "LaSalle College Student Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Back-end web developer", "Front-end web developer", "HTML5-CSS3-JAVAScript-jQuery-Node JS Coder", "Full-stack developer", "LaSalle College Student Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                
            },
            600: {
                items: 2,
                
            },
            1000: {
                items: 3,
                
            }
        }
    });
});

$('#dark-mode-toggle').click(function(event) {
    event.preventDefault(); 
    $('body').toggleClass('dark-mode');

    if ($('body').hasClass('dark-mode')) {
        $('#dark-mode-toggle img').attr('src', 'images/moon.svg');
    } else {
        $('#dark-mode-toggle img').attr('src', 'images/sun.svg');
    }
});