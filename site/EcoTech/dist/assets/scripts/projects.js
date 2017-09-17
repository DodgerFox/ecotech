
function getHashFilter() {
  var hash = location.hash;
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}

$( function() {

  var $grid = $('.projects__items');

  // bind filter button click
  var $checkboxes = $('.projects__tags__items input');
  $checkboxes.change(function() {
    var filterAttr = $('.filters button.active').attr('data-value');
    console.log(filterAttr + 'Filter!!')
    function checkChange() {
            // map input values to an array
            var inclusives = [];
            // inclusive filters from checkboxes
            $checkboxes.each( function( i, elem ) {
              // if checkbox, use value if checked
              if ( elem.checked ) {
                var modificateElem = elem.value + filterAttr;
                inclusives.push( modificateElem );
              }
            });
              if (inclusives.length > 0) {
                  filterAttr = inclusives.length ? inclusives.join(', ') : '*';
                  console.log(filterAttr)
              }
              filterAttr
            // combine inclusive filters
            return filterAttr
          }

    var newFilters = checkChange();
$grid.isotope({
      itemSelector: '.projects__item',
      layoutMode: 'fitRows',
      filter: newFilters
      
    });

  });
  
  var filters = $('.filters button')

  $(filters).click( function mainFuncFilter() {
    var filterAttr = $( this ).attr('data-value');
    console.log(filterAttr + 'Filter 2 !!')
    $('.filters button').removeClass('active')
    $(this).addClass('active')
          
          function checkChange() {
            // map input values to an array
            var inclusives = [];
            // inclusive filters from checkboxes
            $checkboxes.each( function( i, elem ) {
              // if checkbox, use value if checked
              if ( elem.checked ) {
                var modificateElem = elem.value + filterAttr;
                inclusives.push( modificateElem );
              }
            });
              if (inclusives.length > 0) {
                  filterAttr = inclusives.length ? inclusives.join(', ') : '*';
                  console.log(filterAttr)
              }
              filterAttr
            // combine inclusive filters
            return filterAttr
          }

    var newFilters = checkChange();
$grid.isotope({
      itemSelector: '.projects__item',
      layoutMode: 'fitRows',
      filter: newFilters
    });
  });

  var isIsotopeInit = false;

  function onHashchange() {
    var hashFilter = getHashFilter();
    console.log(hashFilter + '!!!')
    if ( !hashFilter && isIsotopeInit ) {
      return;
    }
    isIsotopeInit = true;
    // filter isotope
    $grid.isotope({
      itemSelector: '.projects__item',
      layoutMode: 'fitRows',
      filter: hashFilter
    });
    // set selected class on button
    if ( hashFilter ) {
      $('.filters button.active').removeClass('active');
      var goodFilter = $('[data-value="' + hashFilter + '"]')
      goodFilter.addClass('active');
      console.log(goodFilter + ' filter')
    }

  }

  $(window).on( 'hashchange', onHashchange );
  // trigger event handler to init Isotope
  onHashchange();
});

//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
