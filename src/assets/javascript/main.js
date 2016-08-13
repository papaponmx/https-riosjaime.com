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
        console.log('It is the work page');
        console.log('Getting the data from the API :D');

        $.ajax({
          type: 'GET',
          url: 'https://api.dribbble.com/v1/users/papaponmx/shots/?access_token=d0fb37a3cef7a2f82c4b0d13dd9bbc09e36c0bbaf7ca420662a7993846c54af9',
          success: function(data){
            console.log('success', data);
            console.log('Got the data from the API :D');

            // This loops in order to create the gallery
            for (i = 0; i < 5; i++) {

              console.log('This is an image');


              $('#dribbble__gallery').append('<li>' + 'chema'  + '</li>');

            }
          }

        });

      }
  }
);





