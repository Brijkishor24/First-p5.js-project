const { saveAs } = require("../P5.js project/p5");

function setup(){
    createCanvas(640,480);
      background(100,200,0);
      video=createCapture(VIDEO);
      video.hide();
}

function draw() {
//image(video,0,0,640,480)
circle(550,60,70)
      fill(0,170,255);
      stroke(80,79,265);

      circle(550,420,70)
      fill(0,170,255);
      stroke(80,79,265);

      circle(100,60,70)
      fill(0,170,255);
      stroke(80,79,265);

      circle(100,420,70)
      fill(0,170,255);
      stroke(80,79,265);
      image(video,150,100,350,300)
}

function take_snapshot() {
    save("Photo.png");
}