//Page de chargement
$(window).load(function () {
    $("#lottie").fadeOut('5000', function () {
        $('.entry').removeClass('d-none');
        $('.entry-img img').delay(1200).animate({
            width: "40%"
        });
        $('.artist').delay(1200).fadeIn().addClass('artist-animation');
        $('.name-artist').delay(1200).addClass('name-artist-animation');
        $('.puzzle').delay(6000).fadeIn();
        $('.btn-discover').delay(6000).fadeIn();
    });
});

$('.animation').mouseover(function (event) {
    var X = event.pageX;
    var Y = event.pageY;
    var puzzle = $('.puzzle-piece');
    puzzle.css("background-position", X + "px" + " " + Y + "px");
    puzzle.css("left", X+"px");
    puzzle.css("top", Y+"px");
});

$('.btn-discover').on('click', function () {
    $('.entry').css('display', 'none');
    $('.puzzle-piece').addClass('puzzle-animation');

    $('.t').addClass('agrandissement-t');
    $('.r').addClass('agrandissement-r');
    $('.b').addClass('agrandissement-b');
    $('.l').addClass('agrandissement-l');
    $('.puzzle-piece span').delay(800).fadeOut(400);

    $('.row-down').delay(2000).removeClass('d-none');
    $('.animation').css('position', 'fixed');
    $('.puzzle-animation').animate({
        height : '100vh', width : '100%', marginTop : 0
    })
    $('body').css('overflow', 'initial');
    $('.background-grey').css({'height' : '200vw'});

    $('.background-grey').addClass('background-fade-in');

    $('.logo').removeClass('d-none');
});

var animationTerminate = false;

$(window).on('scroll', function () {
    var windowScroll = $(window).scrollTop();
    var middlePage = ($(window).height() / 2);
    var imageHeight = parseInt($('.puzzle-animation').css('height'));
    var imageWidth = parseInt($('.puzzle-animation').css('width'));
    var imageMargin = 0;
    var titlePosition = $('.content-title').offset().top;
    var ExplicationPosition = $('.text-explication').offset().top;
    var elementMiddle = windowScroll >= (titlePosition-middlePage);
    var ExplicationMiddle = windowScroll > (ExplicationPosition-middlePage);
    var stopScroll = windowScroll <= ExplicationPosition;

    //reduire l'img
    if (imageWidth >= 500 ){
        var newHeight = imageHeight - (windowScroll/200);
        var newWidth = imageWidth - (windowScroll/50);
        var newMargin = imageMargin + (windowScroll/9);
        $('.puzzle-animation').css({'height': newHeight, 'width' : newWidth, 'margin-top' : newMargin});
    } else if (imageWidth < 500) {
        $('.content').removeClass('d-none');
        $('body').css('background', 'var(--white)');
    }

    //faire sortir l'img
    if (elementMiddle && imageWidth < 500 && windowScroll !== titlePosition) {
        var newTop = -(windowScroll/4.5);
        $('.puzzle').css('top', newTop);
        $('.logo').css('z-index', '99');
    }

    //partie arret sur comment ça marche
    if ( ExplicationMiddle && windowScroll !== ExplicationPosition) {
        if(animationTerminate === false) {
            var off = $('.anime-card').offset().top
            $('.anime-card').data('orig-offset', off);
            animationTerminate = true;
        }
        var off = $('.anime-card').data('orig-offset');
        var translate = -(( windowScroll - off ) / $(window).height()*100);


        var heightDiv = $(window).height();
        console.log(heightDiv);
        console.log(translate);
        if (translate >= -10) {
            $('.content-explication').removeClass('content-explication-fixed').addClass('content-explication-relative').css({"position" : "relative"});
        } else {
            $('.content-explication').css({"position" : "fixed", "top" : 0, "left" : 0});
            $('.content-explication h1').addClass('content-explication-fixed');
        }

        $('.sous-titre').addClass('content-explication-fixed');
        $('.anime-card').removeClass('d-none').css('transform', 'translateY('+ translate+'%)');

    } else {

    }

    $('.row-down').addClass('d-none');
})

$(document).ready(function () {
});