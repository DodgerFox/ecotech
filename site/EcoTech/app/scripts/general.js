'use strict'

  contactOpen()
  policyOpen()
  initMapContacts()
  jQueryValidate()



function contactOpen() {
  var buttonOpen = $('.welcome__button'),
      buttonClose = $('.contact-with-us__close'),
      sectionContact = $('section.contact-with-us'),
      footerSlide = $('.footer-slide'),
      sectionPolicy = $('section.policy'),
      pageTransform = $('.page');
  $(buttonOpen).click(function() {
      $(pageTransform).addClass('page-fixed')
      $(pageTransform).addClass('page-transform')
      $(footerSlide).addClass('footer-slide_open-one')
      setTimeout(function () {
        $(pageTransform).removeClass('page-fixed')
      }, 500);
  });
  $(buttonClose).click(function() {
      $(sectionContact).removeClass('contact-with-us_active')
      $(pageTransform).removeClass('page-transform')
      $(footerSlide).removeClass('footer-slide_open-one')
      $(footerSlide).removeClass('footer-slide_open-two')
      $(pageTransform).removeClass('page-fixed')
      
  });

}


function policyOpen() {
  var buttonOpen = $('p.contact-with-us__form__confidential'),
      buttonClose = $('.policy__close'),
      sectionPolicy = $('section.policy'),
      sectionContact = $('section.contact-with-us'),
      footerSlide = $('.footer-slide'),
      pageTransform = $('.page');
  $(buttonOpen).click(function() {
      $(footerSlide).addClass('footer-slide_open-two')
      $(pageTransform).addClass('page-fixed')
  });
  $(buttonClose).click(function() {
      $(footerSlide).removeClass('footer-slide_open-two')
      $(pageTransform).removeClass('page-fixed')
  });

}




function initMapContacts() {

        var uluru = {lat: 59.9253978, lng: 30.3413279};
        var mapMain = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru,
          disableDefaultUI: true,
          scrollwheel: true,
          styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]

        });

        var mainMarker = 'assets/images/svg/marker.svg';
            
        var markerContactsOne = new google.maps.Marker({
          position: uluru,
          map: mapMain,
          icon: mainMarker
        });



}

function jQueryValidate() {
console.log('working!');
  $("#contact-with-us__form").validate({
       rules:{

            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },

            email:{
                required: true,
                email: true
            },
       },

       messages:{

            name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 16",
            },

            email:{
                required: "Это поле обязательно для заполнения",
                email: "На такую почту письмо не придет"
            },

       }

    });

$("#telephone").mask("+9 (999) 999-9999");
}
