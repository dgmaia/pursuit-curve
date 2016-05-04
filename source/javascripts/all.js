$(document).ready(function() {

  var width = $(window).width() - parseInt($('.column-left').outerWidth()) ;
  var height = $(window).height();

  var ctx = createCanvas(width, height);
  var sides = "";
  var loop = 0;
  var trianguloX = [];
  var trianguloY = [];
  var distance = parseFloat($('#distance').val());
  var inputs = $('.column-left input').toArray();
  var inputsNumber = 0;


  $('canvas').click(function(e) {

    var offset = $(this).offset();

    if (loop < 4) {
      trianguloX.push(e.pageX - offset.left);
      trianguloY.push(e.pageY - offset.top);

      $(inputs[inputsNumber]).val(trianguloX[loop]);
      $(inputs[inputsNumber + 1]).val(trianguloY[loop]);

      loop = loop + 1;
      inputsNumber = inputsNumber + 2;
    }

  });

  $('#draw').click(function(e) {
    if ( $(inputs[6]).val() == "" ) {
      sides = parseInt(3);
    } else {
      sides = parseInt(4);
    }
    drawPattern(sides, distance, ctx);
    clearDraw(inputs);
    loop = 0;
    inputsNumber = 0;
    trianguloX = [];
    trianguloY = [];
  });

  $('.column-left #clear').click(function(e) {
    clearDraw(inputs);
    loop = 0;
    inputsNumber = 0;
    trianguloX = [];
    trianguloY = [];
  });

});
