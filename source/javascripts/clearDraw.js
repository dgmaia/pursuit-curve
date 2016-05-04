var clearDraw = function(inputs) {
  $.each( inputs, function(){
    if ( ($(this).attr('id') != "distance") ) {
      $(this).val("");
    }
  })
}
