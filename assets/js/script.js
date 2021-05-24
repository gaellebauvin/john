//Page de chargement
$(window).load(function () {
   $("#lottie").fadeOut('5000', function(){
      $('.entry').removeClass('d-none');
      $('.entry img').delay(500).animate({
         width : "15%", margin : "0"
      });
      $('.artist').delay(1200).fadeIn();

      $('.name-artist').delay(1200).animate({
         marginLeft :"0"
      });
   });
});