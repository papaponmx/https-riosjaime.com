/* Toggle between adding and removing the 'responsive' class to topnav when the user clicks on the icon */
// eslint-disable-next-line no-use-before-define


/* eslint-disable */

function toggleNavigation() {
  'use strict';
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

/* eslint-enable */

/* This is the expander */
$(document).ready(function() {
  'use strict';
  $('.expander-trigger').click(function(){
    $(this).toggleClass('expander-hidden');
  });
});
