var drawPattern = function(sides, distance, canvas) {

  var trianguloX = [];
  var trianguloY = [];
  var inputsNumber = 0;
  var inputs = $('.column-left input').toArray();

  for (var i = 0; i < sides; i++) {
    trianguloX.push(
      parseFloat( $(inputs[inputsNumber]).val() )
    );
    trianguloY.push(
      parseFloat( $(inputs[inputsNumber+1]).val() )
    );
    inputsNumber = inputsNumber + 2;
  }

  trianguloX.unshift(trianguloX[trianguloX.length - 1]);
  trianguloY.unshift(trianguloY[trianguloY.length - 1]);

  canvas.beginPath();
  canvas.lineWidth = 0.1;
  canvas.strokeStyle="#fff";

  for (var i = 1; i < 800; i++) {
    trianguloX.push(
      trianguloX[i] + distance * ( trianguloX[i+1] - trianguloX[i] )
    );
    trianguloY.push(
      trianguloY[i] + distance * ( trianguloY[i+1] - trianguloY[i] )
    );
  }

  for (var i = 0; i < trianguloX.length; i++) {
    canvas.moveTo(trianguloX[i],trianguloY[i]);
    canvas.lineTo(trianguloX[i+1],trianguloY[i+1]);
    canvas.stroke();
  }
}
