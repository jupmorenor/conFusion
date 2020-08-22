$(document).ready(function() {
  $('#my-carousel').carousel({interval: 1000});
  $('#carousel-button').click(function() {
      if ($('#carousel-button').children('span').hasClass('fa-pause')) {
          $('#my-carousel').carousel('pause');
          $('#carousel-button').children('span').removeClass('fa-pause');
          $('#carousel-button').children('span').addClass('fa-play');
      } else if ($('#carousel-button').children('span').hasClass('fa-play')) {
          $('#my-carousel').carousel('cycle');
          $('#carousel-button').children('span').removeClass('fa-play');
          $('#carousel-button').children('span').addClass('fa-pause');
      }
  });

  $("#login-button").click(function () {
      $("#loginmodal").modal('show');
  });

  $("#reserve-button").click(function () {
      $("#reserve").modal('show');
  });
});