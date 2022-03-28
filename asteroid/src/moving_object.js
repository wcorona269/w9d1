// is this es5? 
console.log("in moving object");

const MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
};

// const obj = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    let [x,y] = this.pos;

    ctx.arc(
        x,
        y,
        this.radius,
        0,
        2 * Math.PI
        );
        
        ctx.fill();
    };

// console.log(obj);

module.exports = MovingObject;



