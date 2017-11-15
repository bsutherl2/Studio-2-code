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
