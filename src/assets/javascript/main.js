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

    var siteTittle = $(document).find("title").text();

      if (siteTittle == 'work') {
        console.log('The title is work');
      }
      else {
        console.log('The site tittle is not work');

      }
  },




    $.ajax({
      type: 'GET',
      url: 'https://api.dribbble.com/v1/users/papaponmx/shots/?access_token=d0fb37a3cef7a2f82c4b0d13dd9bbc09e36c0bbaf7ca420662a7993846c54af9',
      success: function(data){
        console.log('success', data);
        console.log('It worked :D');
      }

    })



);


