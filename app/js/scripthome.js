$(document).ready(function() {
  var buttonHeight = $('.buy').outerHeight(true) + 'em';
  $('#websites').css('bottom', '-' + buttonHeight);
  $('#webStuff').css('margin-top', $(window).height());
  //$('#grass').css('bottom', $(window).height() + 'px');
  $('#newad').css('height', $(window).height() + 'px');
  $('#newad').css('top', 0);

  setTimeout(function() {
  $('#websites').animate({
    marginBottom: buttonHeight,
    durration   : 500 
  });
  }, 2000);

  $('.restLoc').on('click', function() {
    window.scrollTo(0, 0);
  });
  $('.restMenu').on('click', function() {
    document.getElementById('webStuff').scrollIntoView();
  });
  $('.buy').on('click', function() {
    document.getElementById('webStuff').scrollIntoView();
  });
 
  $('.restName').on('click', function() {
    window.scrollTo(0, 0);
  });
 

});
