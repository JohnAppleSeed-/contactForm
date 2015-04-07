$(document).ready(function() {
  $('.restLoc').on('click', function() {
    document.getElementById('locInfo').scrollIntoView();
  });
  $('.restMenu').on('click', function() {
    document.getElementById('mList').scrollIntoView();
  });
  $('.restName').on('click', function() {
    window.scrollTo(0, 0);
  });
  
});
