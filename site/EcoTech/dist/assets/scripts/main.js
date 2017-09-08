'use strict'
window.onload = function () {
  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
var wow = new WOW().init();

}

var $grid = $('.projects__items').isotope({
  itemSelector: '.projects__item',
  layoutMode: 'fitRows',
  percentPosition: true
});



var filters = {};

$('.filters').on( 'click', '.button', function() {

  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.projects__nav__list');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
  

});


// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  console.log(value);
  return value;
}

$grid.on( 'arrangeComplete', function( event, filteredItems ) {
  console.log( 'arrangeComplete with ' + filteredItems.length + ' items' );
  $(filteredItems[0]).removeClass('sites');
  var allItems = filteredItems;
  $(allItems[0]).addClass('activeQQ')
  console.log(allItems[0])

});



/*
  $(".header").sticky({topSpacing:0});
   $('.header').on('sticky-start', function() { console.log("Started"); $('.popup__booking').addClass('popup__booking__fix'); });
  $('.header').on('sticky-end', function() { console.log("Ended"); $('.popup__booking').removeClass('popup__booking__fix'); });
  $('.header').on('sticky-update', function() { console.log("Update"); });
  $('.header').on('sticky-bottom-reached', function() { console.log("Bottom reached"); });
  $('.header').on('sticky-bottom-unreached', function() { console.log("Bottom unreached"); });
*/