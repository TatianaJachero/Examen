let font;
let vehicles = [];

function preload() {
  font = loadFont('Fresh Lychee.otf')
}

function setup() {
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
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(5, 5);
    // point(pt.x, pt.y);

  }
}

function draw() {
  background(100, 200, 100);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.update();
    v.show();
  }

}