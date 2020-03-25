var raindrops = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0); 

  if(frameCount % 1 === 0){
    var raindrop = new Raindrop(random(0, windowWidth), 0, random(3,5), random(30, 50));
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall();
    raindrops[i].display();
  }
}