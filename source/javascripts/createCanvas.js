createCanvas = function(width, height) {

  var pixel = pixelRatio();
  var canvas = createHiDPICanvas(width, height, pixel);

  $('.where-canvas').append(canvas);
  $(canvas).attr('id','canvas');

  var ctx = document.getElementById("canvas").getContext("2d");

  return ctx;
}
