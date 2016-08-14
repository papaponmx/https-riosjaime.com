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

// Dribbble API interaction

$(document).ready(


  function() {

      if ( $('#title__work').length){
        $.getJSON({
          url: 'https://api.dribbble.com/v1/users/papaponmx/shots/?access_token=d0fb37a3cef7a2f82c4b0d13dd9bbc09e36c0bbaf7ca420662a7993846c54af9',
          success: function(data){
            var shots = ('success', data);
            console.log(shots);
            console.log('Just logged the cities variable');


            // This loops in order to create the gallery
            for (var shot in shots) {

              // Note to myself: Please note the sintax that gives you access to the id, for some reason, it took me some time find it
                 // console.log(shots[shot].id);
                 $('#dribbble__gallery').append('<li>' + '<img src="' + shots[shot].images.teaser + '">' + '</li>');

            }
          }

        });
console.log(this.legnth);
      }
  }
);





