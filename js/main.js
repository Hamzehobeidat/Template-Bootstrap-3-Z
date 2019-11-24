$(function () {

  'use strict';

  $(window).scroll(function () {

    var navbar = $('.navbar');

    if($(window).scrollTop() >= navbar.height()) {

      navbar.addClass('scrolled');

    } else {

      navbar.removeClass('scrolled');
    }
  });

  // Deal All Tabs
  $('.tab-switch li').click(function () {
    //Add selected class to active link
    $(this).addClass('selected').siblings().removeClass('selected');
    //Hide all div
    $('.tabs-section .tabs-content > div').hide();
    //show div connected with this link
    $($(this).data('class')).show();
  });

});
