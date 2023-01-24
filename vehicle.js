
function Vehicle(x, y) {
    this.pos = createVector(x, y);
    this.target = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.r = 8;
}

Vehicle.prototype.update = function () {
    this.pos.add(this.vel);
    this.vel.add(this.acc);

}

Vehicle.prototype.show = function () {
    stroke(255);
    strokeWeight(5, 5);
    point(this.pos.x, this.pos.y);

}