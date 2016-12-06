$(function(){

    $('.hamburger-btn').on('click',function(){

        $('.gnb').removeClass('blind');

        $('.header-inner').css({ left : 400})

        $('.help').css({ left : 400})

    });




    $('.gnb').on('click',function(){

        $('.gnb').addClass('blind');

        $('.header-inner').css({ left : 89})

        $('.help').css({ left : 84})

    });



});