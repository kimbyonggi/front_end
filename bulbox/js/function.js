function checkVideo( $video ){
  $video.css({
    'margin-top' : -$video.height()/2
  });

  setTimeout(function(){
    $video[0].play();
  }, 3000);

}

$(window).on('load', function(){

  checkVideo( $('.intro') );

  $('.loader-wrap').delay(3000).fadeOut(1000);
  $('.intro').delay(3000).fadeIn(1000);

});


$(function(){

  // video play
  $('.intro').on('timeupdate', function(){

    if( $(this)[0].currentTime >= 9.5) {
      $('.intro').fadeOut(1000);
      $('.wrap').fadeIn(1000);
    }
  });

  //rolling box auto

  //var deg = 0;
  //
  //var tId = setInterval(function(){
  //
  //  $('.banner').css({
  //    'transform' : 'translateZ(-300px) rotateY(' + ( deg * 90 ) + 'deg)'
  //  });
  //
  //  deg++;
  //
  //}, 3000);


  // rolling box click event
  $('.btn-page').on('click', function(e){

    e.preventDefault();

    //clearInterval( tId );

    $('.btn-page').removeClass('current');
    $(this).addClass('current');

    $('.banner').css({
      'transform' : 'translateZ(-300px) rotateY(' + ( $(this).index() * 90 ) + 'deg)'
    });

  });

  // rolling box2 click event
  $('.btn-page2').on('click', function(e){

    e.preventDefault();

    //clearInterval( tId );

    $('.btn-page2').removeClass('current');
    $(this).addClass('current');

    $('.banner_cub').css({
      'transform' : 'translateZ(-200px) rotateY(' + ( $(this).index() * 90 ) + 'deg)'
    });

  });

});