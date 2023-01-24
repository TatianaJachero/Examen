
function Vehicle(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 30;
    this.maxspeed = 5;
    this.maxforce = 1;
    this.red = random(100, 250);
    this.green = random(100, 255);
    this.blue = random(100, 150);
    this.diametro = random(-3, 8);
}

Vehicle.prototype.behaviors = function () {
    let arrive = this.arrive(this.target);
    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse);

    arrive.mult(0.1);
    flee.mult(9);

    this.applyForce(arrive);
    this.applyForce(flee);
}

Vehicle.prototype.applyForce = function (f) {
    this.acc.add(f);
}

Vehicle.prototype.update = function () {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0.01);
}

Vehicle.prototype.show = function () {
    stroke('rgba]0,100,150,0.01)');

    fill(this.red, this.green, this.blue);
    ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);

}

Vehicle.prototype.arrive = function (target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    let speed = this.maxspeed;
    if (d < 100) {
        speed = map(d, 0, 100, 0, this.maxspeed);
    }

    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
}

Vehicle.prototype.flee = function (target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    if (d < 50) {
        desired.setMag(this.maxspeed);
        desired.mult(-1);
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxforce);
        return steer;
    } else {
        return createVector(0, 0);
    }
}