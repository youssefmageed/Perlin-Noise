    var inc = 0.01;
// var start = 0

function setup() {
  createCanvas (480 , 480);
  pixelDensity(1);
}

function draw() {

  
  var yoff = 0;
  loadPixels();
  for (var y = 0; y < height; y++){

    var xoff = 0;

    for (var x = 0; x < width; x++){

      var index = (x + y * width ) * 4;

      var r = noise(xoff, yoff) *  255;

      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc; 
  }
  updatePixels();

  // stroke(255);
  // noFill();

  // beginShape(); 

  // var xoff = start;
  // for (var x = 0 ; x < width ; x++){
  //   stroke(255);
  //   var n = map(noise(xoff), 0, 1, -50, 50);
  //   var s = map(sin(xoff), -1, 1, 0, height);
  //   var y = s + n;
  //   point(x, y);

  //   xoff += inc;
  // }

  // endShape() 

  // start += inc
}