var num = 14;
var data = {};
var numTopics = 50;
var numWords = 50;
var xSpacing = 80;
var ySpacing = 15;
var svgContainer = d3.select("body").append("svg")
                                    .attr("width",2000)
                                    .attr("height",800);


function setup() {
  //createCanvas(3000, 800);

  background(200);
  noStroke();
//loading tw.json and then callback afterJSON
  data = loadJSON('data/tw.json', afterJSON,'json');

}

function afterJSON(){

  console.log(typeof data);
  //console.log(data["tw"]);
  console.log(data.tw[0].words);
  console.log(data.tw[0].weights[0]);

  draw();

}

function draw() {

//Show tw of every topic


  for(var i = 0; i < numTopics; i++){
    
    for(var j = 0; j < numWords; j++){
      fill(0);
      //text(data.tw[i].words[i],3*(data.tw[0].weights[i]),(i+3)*15);
      //createP(data.tw[i].words[j],i*xSpacing,(j+3)*ySpacing);
      //text(data.tw[i].words[j],i*xSpacing,(j+3)*ySpacing);//Drawing data on Canvas
      //text(data.tw[1].words[i],130,(i+3)*15);
      //button = createButton(data.tw[i].words[0],20,(i+3)*15);
      //console.log(data.tw[0].words);
      function write(){
        text(data.tw[i].words[j])
        text('Topic ' + (i+1),i*xSpacing,ySpacing);
      }
      svg.("write")
        .attr('x',i*xSpacing)
        .attr('y',(j+3)*ySpacing);
    }
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
