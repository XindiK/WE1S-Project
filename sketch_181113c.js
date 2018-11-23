var num = 14;
var data = {};
var numTopics = 50;


function setup() {
  createCanvas(1000, 1000);
  background(200);
  noStroke();
//loading tw.json and then callback afterJSON
  data = loadJSON('data/tw.json', afterJSON,'json');

}

function afterJSON(){

  console.log(typeof data);
  console.log(data["tw"]);
  console.log(data.tw[0].words);
  console.log(data.tw[0].weights[0]);
draw();

}

function draw() {

//Show tw of
  for(var i = 0; i < numTopics; i++){
    fill(0);
    text(data.tw[0].words[i],3*(data.tw[0].weights[i]),(i+3)*15);
    //button = createButton(data.tw[i].words[0],20,(i+3)*15);
    console.log(data.tw[0].words);
  }
  // button = createButton('weird')
  // button.position(20,10)
  // button.mousePressed(rect(400,400,400,400))

  // for(var i = 0; i < numTopics; i++){
  //   noFill();
  //   stroke(0);
  //   rect(15,(i+3)*15,85,10);
  // }
}
