// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootsy
// require turbolinks
//= require bootstrap-sprockets
//= require bootstrap-tokenfield
//= require typeahead
//= require bloodhound
//= require underscore
//= require swfobject
//= require cocoon
//= require profile
//= require system
//= require browser_timezone_rails/application.js


$(function() {
  setTimeout(function() {
    $('.alert').fadeOut();
  }, 2500);
});

/* time zone */
window.BrowserTZone || (window.BrowserTZone = {});
BrowserTZone.setCookie = function() {
  return $.cookie("browser.timezone", jstz.determine().name(), {
    expires: 365,
    path: '/'
  });
};

jQuery(function() {
  return BrowserTZone.setCookie();
});
/* time zone */

$(document).ready(function() {
  radio_button_replacement();

  $('.radio.select input[type="radio"]').bind('click', function() {
    radio_button_replacement();
  });

  $('#modal').on('shown.bs.modal', function () {
    $(this).removeData('bs.modal');
  });

  //Google Translate fix
  function googleTransLength() {
    var translatecontainer = $('.skiptranslate');
    var translatebar = $('.goog-te-banner-frame');
    var nav = $('.navbar-fixed-top');

    if( translatecontainer.css('display') != 'none' && translatebar.length > 0 ) {
      nav.css('top', '40px');
    }
    else {
      nav.css('top', '0');
    }
  }
  setInterval(googleTransLength, 200);
});