/**
 * Created by 321-16 on 2016-07-22.
 */

$(function(){

    $('.gnb-depth1-link').on('mouseenter', function(){
        $('.gnb-depth2').delay(500).stop() .fadeIn(1000);
        $('.gnb-bg').stop().animate({
            height:274
        }, 300);
    });

    $('.gnb-depth2').on('mouseleave', function(){
        $('.gnb-depth2').stop().fadeOut(30);
        $('.gnb-bg').stop().animate({
            height:0
        });
    });

});