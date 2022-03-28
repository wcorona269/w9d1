// is this es5? 
console.log("in moving object");

const MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
};

const obj = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

MovingObect.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.pos,
        this.vel,
        this.radius,
        0,
        2 * Math.PI,
        false
    );

    ctx.fill();
};

module.exports = MovingObject;

