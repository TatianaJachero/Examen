var font;

function setup() {
  font = loadFont('Fresh Lychee.otf')
}

function draw() {
  createCanvas(1980, 720);
  background(100, 200, 100);
  textFont(font);
  textSize(200);
  fill(255);
  noStroke();
  text('Believe in yourself', 300, 440);
}