var num = 3;
var shirt = 0;

function setup() {
  createCanvas(600, 400);
}


function draw() {
  noStroke();
  background(176, 224, 230);
  fill(0);
  textAlign(CENTER);
  textSize(13);
  text("press 'enter' to \n change your shirt color!", 500, 120)
  if (num > 0) {
    textSize(10);
    text("carrot countdown: " + num, 50, 20)
    textSize(20);
    text("click the table to eat your veggies! \n If you do, you'll get dessert :)", width / 2, 50);
  } else if (num == 0) {
    textSize(20);
    text("great job, click on the table to eat your cake!", width / 2, 50);
  } else if (num == -1) {
    textSize(20);
    text("click on the table to replay", width / 2, 50);
  }

  //table
  stroke(0);
  fill(110, 38, 14);
  rect(325, 200, 250, 200);
  //plate
  stroke(0)
  fill(192, 192, 192);
  ellipse(450, 300, 200, 50);

  //carrots
  if (num > 0) {
    noStroke();
    for (let i = 0; i < num; i++) {
      fill(0, 128, 0);
      ellipse(405 + (40 * i), 270, 5, 20);
      ellipse(412 + (40 * i), 270, 5, 10);
      fill(255, 165, 0);
      triangle(400 + (40 * i), 270, 400 + (40 * i), 305, 420 + (40 * i), 270);
    }
  }
  //candles + cake
  else if (num == 0) {
    noStroke();
    for (let i = 0; i < 5; i++) {
      fill(255, 165, 0);
      ellipse(420 + (15 * i), 260, 3, 10);
    }
    for (let i = 0; i < 5; i++) {
      fill(242, 210, 189);
      rect(418 + (15 * i), 260, 5, 10);
    }
    fill(243, 58, 106);
    rect(415, 270, 70, 50);
  }
  //crumbs + text bubble
  else {
    noStroke();
    fill(243, 58, 106);
    ellipse(400, 300, 3, 3);
    ellipse(420, 290, 3, 3);
    ellipse(460, 310, 3, 3);
    ellipse(485, 315, 3, 3);
    ellipse(490, 285, 3, 3);

    stroke(0);
    fill(255);
    ellipse(220, 110, 100, 50);
    ellipse(170, 140, 10, 10);
    textSize(13);
    fill(0);
    noStroke();
    text("thanks!", 220, 115);
  }

  noStroke();
  //hair back
  fill(114, 47, 55);
  rect(45, 150, 110, 90);
  //neck
  fill(224, 191, 184);
  ellipse(100, 250, 40, 30);
  //head
  ellipse(100, 200, 100, 90);
  //hair front
  fill(114, 47, 55);
  ellipse(100, 150, 110, 40);
  //shirt
  if (shirt == 1) {
    fill(204, 0, 0);
  } else if (shirt == 2) {
    fill(255, 255, 51);
  } else if (shirt == 3) {
    fill(0, 128, 0);
  } else if (shirt == 4) {
    fill(102, 178, 255);
  } else {
    fill(76, 0, 153);
    }
    rect(60, 250, 80, 100);
    //pants
    fill(0, 0, 139);
    rect(60, 350, 80, 25);
    rect(60, 350, 30, 80);
    rect(110, 350, 30, 80);

    //face
    if (num > 0) {
      //eyes
      fill(0);
      ellipse(120, 190, 8, 10);
      ellipse(80, 190, 8, 10);
      //eyebrows
      stroke(114, 47, 55);
      line(120, 180, 130, 185);
      line(70, 185, 80, 180);
      //nose
      stroke(0);
      line(95, 200, 95, 210);
      line(95, 210, 100, 210);
      //mouth
      line(92, 220, 107, 220);
      line(92, 220, 87, 225);
      line(107, 220, 112, 225);


    } else {
      //eyes
      fill(0);
      ellipse(120, 190, 8, 10);
      ellipse(80, 190, 8, 10);
      //eyebrows
      stroke(114, 47, 55);
      line(115, 180, 120, 175);
      line(120, 175, 125, 180);
      line(75, 180, 80, 175);
      line(80, 175, 85, 180);
      //nose
      stroke(0);
      line(95, 200, 95, 210);
      line(95, 210, 100, 210);
      //mouth
      arc(100, 220, 20, 10, 0, PI);
    }

    print(shirt);
  }

  function mousePressed() {
    if ((mouseX >= 325) && (mouseX <= 575) && (mouseY >= 200) && (mouseY <= 400)) {
      if (num == -1) {
        num = 3;
      } else {
        num = num - 1;
      }
    }
  }

  function keyPressed() {
    if (keyCode == ENTER){
      if (shirt == 4) {
        shirt = 0;
      } else {
        shirt++;
      }
  }
}
