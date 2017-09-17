'use strict'
window.onload = function () {
  contactsOpen()
  wowInit()

}

function wowInit() {
  new WOW().init();
}

function contactsOpen() {
  var buttonOpen = $('.links__navigation__contacts'),
      buttonClose = $('.contacts__close'),
      sectionContact = $('section.contacts'),
      pageTransform = $('.page');
  $(buttonOpen).click(function() {
      $(pageTransform).addClass('page-fixed')
      $(pageTransform).addClass('page-transform-up')
      $(sectionContact).addClass('contacts_active')
  });
  $(buttonClose).click(function() {
      $(pageTransform).removeClass('page-transform-up')
      $(sectionContact).removeClass('contacts_active')

      setTimeout(function () {
        $(pageTransform).removeClass('page-fixed')
      }, 500);
  });

}

