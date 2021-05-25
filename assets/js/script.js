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
    puzzle.css("background-position", (X-300) + "px" + " " + (Y-300) + "px");
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
    $('.row-down').delay(2000).removeClass('d-none');
});

$(window).on('scroll', function () {
    console.log('here');
})

$(document).ready(function () {
    $('.row-down').animate([
        {top: '90%'},
        {top: '92%'},
        {top: '90%'}
    ],{
        duration: 700,
        iterations: Infinity
    });
})