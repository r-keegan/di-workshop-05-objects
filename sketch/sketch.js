var ballCount = 5
var xs = []
var ys = []
var speedX = []
var speedY = []

function setup() {
  createCanvas(400, 400)

  for (var i = 0; i < ballCount; i = i + 1) {
    xs[i] = Math.random() * width //sets limits of width
    ys[i] = Math.random() * height //sets limits of height
    speedX[i] = Math.random() * 3 //sets speed
    speedY[i] = Math.random() * 3 //sets speed
  }
}

function draw() {
  background(200)

  for (var i = 0; i < ballCount; i = i + 1) {
    xs[i] += speedX[i]
    ys[i] += speedY[i]
 // makes sure balls bounce within left and right parameters (width)
    if (xs[i] < 0 || xs[i] > width) {
      speedX[i] = speedX[i] * -1
    } //makes sure balls bounce within sup and inf parameters (height)
    if (ys[i] < 0 || ys[i] > height) {
      speedY[i] = speedY[i] * -1
    }
    //creates balls
    ellipse(xs[i] - 5, ys[i] - 5, 20, 20)
  }
}