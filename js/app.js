$(window).load(function() {

   // **************************************** (loading page)
   $('#loading').hide();

   // **************************************** (WOW.js)
   wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true
   })
   wow.init();

});
$(document).ready(function() {

   // **************************************** (accordion)

   $('.collapsible').collapsible({
      accordion: true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });

   // **************************************** (tabs)

   $('ul.tabs').tabs();

   // **************************************** (open modal)

   $('.modal-trigger').leanModal();

});



$(document).ready(function() {


   // **************************************** (toggle off hover on CTA hire me btn)


   // $('.cta').hover(function() {
   //    $('.cta').removeClass('.scaling');
   // }, function() {
   //    $('.cta').addClass('.scaling');
   // });



   // **************************************** (toggle off hover on CTA hire me btn)


   $('.body-home .col .hoverable').hover(function() {
      $('.body-home .col .hoverable i').addClass('promo-icon-hover');

   }, function() {
      $('.body-home .col .hoverable i').removeClass('promo-icon-hover');

   });


   // **************************************** (hover effect on modal icons)


   $(".modal-icons a").hover(function() {
      $(this).addClass('scaling-fast');
   }, function() {
      $(this).removeClass('scaling-fast');
   });


});