var today = new Date();
var hourNow = today.getHours(); 
var greeting;

    if (hourNow<12) {greeting='Доброе утро!'};
    else if (hourNow<16) {greeting='Добрый день!'};
    else if (hourNow<21) {greeting='Добрый вечер!'};
    else if (hourNow<03) {greeting='Доброе ночи!'};
    else {greeting='Добро пожаловать!'};
    alert(greeting);


$(function(){

 // Main page  
    $('span').on('mouseenter', function(){
        $(this).addClass('light');
    }); 
    $('span').on('mouseleave', function(){
        $(this).removeClass('light');
    }); 

    $('button').on('mouseenter', function(){
        $(this).addClass('light');
    }); 
    $('button').on('mouseleave', function(){
        $(this).removeClass('light');
    }); 
// Services page


    $('#slideOne').on('click', function(){
        $('#hideOne').slideToggle(200).text('(дизайн макета, верстка, публикация на ваш хостинг)');
    }); 
    $('#slideTwo').on('click', function(){
        $('#hideTwo').slideToggle(200).text('3 варианта');
    }); 
    $('#slideThree').on('click', function(){
        $('#hideThree').slideToggle(200).text('(от 5 шт.)');
    }); 
    $('#slideFour').on('click', function(){
        $('#hideFour').slideToggle(200).text('...');
    }); 

   
});