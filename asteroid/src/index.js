console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

// addEventListener("this", "that") = listen to the event loop, run "that" when "this" happens)
Document.addEventListener('DOMContentLoaded', function() {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.getContext('2d');
    canvasEl.width = 500;
    canvasEl.height = 500;
});

