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


//animation de la piece de puzzle qui suit la souris
$('.animation').mouseover(function (event) {
    var X = event.pageX;
    var Y = event.pageY;
    var puzzle = $('.puzzle-piece');
    puzzle.css("background-position", X + "px" + " " + Y + "px");
    puzzle.css("left", X + "px");
    puzzle.css("top", Y + "px");
});

//animation btn qui agrandit la piece de puzzle
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
        height: '100vh', width: '100%', marginTop: 0
    })
    $('body').css('overflow', 'initial');
    $('.background-grey').css({'height': '200vw'});

    $('.background-grey').addClass('background-fade-in');

    $('.logo').removeClass('d-none');
});

var scrollTop = false;

$(window).on('scroll', function () {
    var windowScroll = $(window).scrollTop();
    var middlePage = ($(window).height() / 2);
    var imageHeight = parseInt($('.puzzle-animation').css('height'));
    var imageWidth = parseInt($('.puzzle-animation').css('width'));
    var imageMargin = 0;
    var titlePosition = $('.content-title').offset().top;
    var ExplicationPosition = $('.text-explication').offset().top;
    var elementMiddle = windowScroll >= (titlePosition - middlePage);
    var ExplicationMiddle = windowScroll > (ExplicationPosition - middlePage);

    //reduire l'img
    if (imageWidth >= 500) {
        var newHeight = imageHeight - (windowScroll / 200);
        var newWidth = imageWidth - (windowScroll / 50);
        var newMargin = imageMargin + (windowScroll / 9);
        $('.puzzle-animation').css({'height': newHeight, 'width': newWidth, 'margin-top': newMargin});
    } else if (imageWidth < 500) {
        $('.content').removeClass('d-none');
        $('body').css('background', 'var(--white)');
    }

    //faire sortir l'img
    if (elementMiddle && imageWidth < 500 && windowScroll !== titlePosition) {
        var newTop = -(windowScroll * 3);
        $('.background-grey').css('height', '20vw');
        $('.puzzle').css('top', newTop);
        $('.logo').css('z-index', '9');


        if (scrollTop === false) {
            scrollToTop();
            scrollTop = true;
        }
    }

    if (middlePage === titlePosition){
        $('.all-card').css('overflow', 'scroll');
        $('.explication').css('opacity', 0.5);
    }

    $('.row-down').addClass('d-none');
})

//animation du caroussel
var positonLeft = 0;
var nbrClick = 1;
$('#arrow-right').on('click', function () {
    if (nbrClick < 4) {
        positonLeft = positonLeft - 66;
        $('.caroussel').css({'left': positonLeft + '%'});
        $('.point').css('opacity', 0.2);
        nbrClick = nbrClick + 1;
        $('.point-' + nbrClick).css('opacity', 1);
    }
});

$('#arrow-left').on('click', function () {
    if (nbrClick > 1) {
        positonLeft = positonLeft + 66;
        $('.caroussel').css({'left': positonLeft + '%'});
        $('.point').css('opacity', 0.2);
        nbrClick = nbrClick - 1;
        $('.point-' + nbrClick).css('opacity', 1);
        console.log(nbrClick);
    }
});

function scrollToTop() {
    $(window).scrollTop(0);
}