/*DASH BOARD REQ FOR TEMP TOGGLE MENU*/
$(document).ready(function(){
$("a#mob-nav").click(function(){
$("div.mob-menu").slideToggle('fast');
return false;
});

$('a#show-project-empl').click(function(){
   $('.overlay').fadeIn('fast');
   $('.project-container-empl').fadeIn('normal');
   return false;
});

$('a#close-project-empl').click(function(){
   $('.overlay').fadeOut('normal');
   $('.project-container-empl').fadeOut('fast');
   return false;
});

$('a#show-project-b').click(function(){
    $('.overlay').fadeIn('fast');
    $('.project-container-b').fadeIn('normal');
    return false;
 });
 
 $('a#close-project-b').click(function(){
    $('.overlay').fadeOut('normal');
    $('.project-container-b').fadeOut('fast');
    return false;
 });

 $('a#show-project-libe').click(function(){
    $('.overlay').fadeIn('fast');
    $('.project-container-libe').fadeIn('normal');
    return false;
 });
 
 $('a#close-project-libe').click(function(){
    $('.overlay').fadeOut('normal');
    $('.project-container-libe').fadeOut('fast');
    return false;
 });

 $('a#show-project-envi-two').click(function(){
   $('.overlay').fadeIn('fast');
   $('.project-container-envi-two').fadeIn('normal');
   return false;
 });

 $('a#close-project-envi-two').click(function(){
   $('.overlay').fadeOut('normal');
   $('.project-container-envi-two').fadeOut('fast');
   return false;
 });

 $('a#show-project-femm-one').click(function(){
   $('.overlay').fadeIn('fast');
   $('.project-container-femm-one').fadeIn('normal');
   return false;
 });

 $('a#close-project-femm-one').click(function(){
   $('.overlay').fadeOut('normal');
   $('.project-container-femm-one').fadeOut('fast');
   return false;
 });

 $('a#show-project-femm-two').click(function(){
   $('.overlay').fadeIn('fast');
   $('.project-container-femm-two').fadeIn('normal');
   return false;
 });

 $('a#close-project-femm-two').click(function(){
   $('.overlay').fadeOut('normal');
   $('.project-container-femm-two').fadeOut('fast');
   return false;
 });

 $('a#show-project-sede-two').click(function(){
   $('.overlay').fadeIn('fast');
   $('.project-container-sede-two').fadeIn('normal');
   return false;
 });

 $('a#close-project-sede-two').click(function(){
   $('.overlay').fadeOut('normal');
   $('.project-container-sede-two').fadeOut('fast');
   return false;
 });

 $('a#show-project-sede-one').click(function(){
  $('.overlay').fadeIn('fast');
  $('.project-container-sede-one').fadeIn('normal');
  return false;
});

$('a#close-project-sede-one').click(function(){
  $('.overlay').fadeOut('normal');
  $('.project-container-sede-one').fadeOut('fast');
  return false;
});

$('a#show-project-droi-one').click(function(){
  $('.overlay').fadeIn('fast');
  $('.project-container-droi-one').fadeIn('normal');
  return false;
});

$('a#close-project-droi-one').click(function(){
  $('.overlay').fadeOut('normal');
  $('.project-container-droi-one').fadeOut('fast');
  return false;
});

$('a#show-project-droi-two').click(function(){
  $('.overlay').fadeIn('fast');
  $('.project-container-droi-two').fadeIn('normal');
  return false;
});

$('a#close-project-droi-two').click(function(){
  $('.overlay').fadeOut('normal');
  $('.project-container-droi-two').fadeOut('fast');
  return false;
});

$('a#show-project-envi-one').click(function(){
  $('.overlay').fadeIn('fast');
  $('.project-container-envi-one').fadeIn('normal');
  return false;
});

$('a#close-project-envi-one').click(function(){
  $('.overlay').fadeOut('normal');
  $('.project-container-envi-one').fadeOut('fast');
  return false;
});

$('a#show-project-envi-three').click(function(){
  $('.overlay').fadeIn('fast');
  $('.project-container-envi-three').fadeIn('normal');
  return false;
});

$('a#close-project-envi-three').click(function(){
  $('.overlay').fadeOut('normal');
  $('.project-container-envi-three').fadeOut('fast');
  return false;
});

});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 100 ) {
        $('.top-index').addClass('top-bar-bg');
    } else {
        $('.top-index').removeClass('top-bar-bg');  
    }
});
