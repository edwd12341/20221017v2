function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);  
  noFill()
  stroke(255)
  strokeWeight(2)
  for(var j=0;j<(windowHeight/100);j++)
    {
     for(var i=0;i<(windowWidth/100);i++)
  { 
       stroke("#FFC857")
  ellipse(50+(i*100),50+(j*100),mouseY/8,mouseY/4)  
  rectMode(CENTER)
  stroke("#9EBC9E")
  rect(50+(i*100),50+(j*100),mouseX/4,mouseX/2)
  stroke("#C45AB3")
  ellipse(100+(i*100),100+(j*100),mouseX/2,mouseX)
  }
}
}
