$(window).scroll(function(){
  var curentPosition = Math.round($(this).scrollTop());
  console.log(curentPosition);
  $('.midground').css({
    'transform': 'translate(0px, -' + (curentPosition / 5) + '%)'
  });
  $('.forground').css({
    'transform': 'translate('+(curentPosition / 2)+'%, ' + (curentPosition / 2) + '%)',
    'opacity': '0.5'
  });

  $('.text').css({
    'transform': 'translate(0px, ' + (curentPosition / 7) + '%)'
  });

});
$(window).scroll(function () {
    $('.scrollReveal').each(function () {
        var imagePos = $(this).offset().top - 310;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("typewriter");
        }
    });
});
