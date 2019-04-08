var ballCount = 5

var balls = []

function setup() {
  createCanvas(400, 400)

  for (var i = 0; i < ballCount; i = i + 1) {
      var myBall = { 
          xs : Math.random() * width,
          ys : Math.random() * height,
          speedX : Math.random() * 3,
          speedY : Math.random() * 3,
      }; 
      balls.push(myBall);
  }   
}

function draw() {
  background(200)

  for (var i = 0; i < balls.length; i = i + 1) {
    balls[i].xs += balls[i].speedX
    balls[i].ys += balls[i].speedY
                                                        // makes sure balls bounce within left and right parameters (width)
    if (balls[i].xs < 0 || balls[i].xs > width) {
      balls[i].speedX = balls[i].speedX * -1
    }                                                   //makes sure balls bounce within sup and inf parameters (height)
    if (balls[i].ys < 0 || balls[i].ys > height) {
      balls[i].speedY = balls[i].speedY * -1
    }
                                                        //creates balls
    ellipse(balls[i].xs - 5, balls[i].ys - 5, 20, 20)
  }
}

