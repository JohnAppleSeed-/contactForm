$(document).ready(function() {
  $('#editMenu').on('click', function() {
    $('#infoForm').hide();
    $('#save2').hide();
    $('#save').show();
    $('.adminHeaderMenu').show();
    $('#adminSubMenu').show();
  });

  $('#editInfo').on('click', function() {
    $('.adminHeaderMenu').hide();
    $('#save2').show();
    $('#save').hide();
    $('#adminSubMenu').hide();
    $('#infoForm').show();
  });

  $('#addNew').on('click', function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
  });

  $('#save').on('click', function() {
    $('#passDiv').show();
  });

  $('#save2').on('click', function() {
    $('#passDiv2').show();
  });


  $('.cancelButt').on('click', function() {
    $('#passDiv').hide();
    $('#passDiv2').hide();
  });

  $('.confirmSave').on('click', function() {
    $('#passDiv').hide();
    $('#passDiv2').hide();
  });

});
