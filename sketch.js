let font;

function setup() {
  font = loadFont('Fresh Lychee.otf')
}

function draw() {
  createCanvas(1980, 720);
  background(100, 200, 100);
  //textFont(font);
  //textSize(250);
  //fill(255);
  //noStroke();
  //text('Believe in yourself', 200, 440);

  let points = font.textToPoints('Believe in yourself', 200, 440, 230)

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    stroke(255);
    strokeWeight(8);
    point(pt.x, pt.y);

  }
}