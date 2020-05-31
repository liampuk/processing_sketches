void setup() {
  size(700, 700);
  colorMode(HSB, 360);
  background(18, 230, 360);
  //rectMode(CENTER);
}

float t = 0.03;
float diff = 0.0001;

float offsetY = 0;
float offsetX = 0;

void draw() {
  t+=diff;
  if (t > 0.04) {
    diff = -0.0001;
  } else if (t < 0.01) {
    diff = 0.0001;
  }

  //background(18, 230, 360);
  background(205, 342, 360);

  stroke(360);
  //rect(250, 250, 360, 360);
  //line(0,0,360,360);

  //int[][] xy = new int[360][360];
  //for (int x=140; x<600; x+=5) {
  //  line(140, x, x, 140);
  //  line(600, x, x, 600);
  //}

  float timeY = offsetY;
  float[][][] xy = new float [140][140][2];
  for (int y=0; y<140; y++) {
    float timeX = offsetX;
    for (int x=0; x<140; x++) {
      xy[x][y] = new float[]{x, y+(map(noise(timeX, timeY), 0, 1, 0, 50)-25)};
      //time+=map(mouseX,0,700,1,1.01);
      timeX += t;
    }
    timeY += t;
  }

  offsetX = 10-map((mouseX - width/2), 0, width, 0, 10);
  offsetY = 10-map((mouseY - height/2), 0, height, 0, 10);

  //offsetY += -0.1;
  //offsetX += -0.1;



  for (int x=1; x<140-1; x++) {
    for (int y=1; y<140-1; y++) {
      float x0 = (xy[x][y][0]*5);
      float x1 = (xy[x+1][y-1][0]*5);
      //float y0 = (xy[x][y][1]*5)+140 > 600 ? 600 : (xy[x][y][1]*5)+140;
      //float y1 = (xy[x+1][y-1][1]*5)+140 > 600 ? 600 : (xy[x+1][y-1][1]*5)+140;
      
      float y0 = (xy[x][y][1]*5);
      float y1 = (xy[x+1][y-1][1]*5);
      
      //if (y1 > 600) {
      //  continue;
      //}
      line(x0, y0, x1, y1);
    }
  }
  
  fill(205, 342, 360);
  stroke(0,0);
  rect(0,0,700,105);
  rect(0,0,105,700);
  rect(0,605,700,700);
  rect(595,0,700,700);
  
}
