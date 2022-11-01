function setup() {
  createCanvas(500, 500);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  length = createSlider(0, 200, 100, 1);
  modifier = createSlider(0, 0.725, 0.67, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  len = length.value();
  mod = modifier.value();
  stroke(255);
  translate(width / 2, height);
  branch(len);
}

const branch = (len) => {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * mod);
    pop();
    push();
    rotate(-angle);
    branch(len * mod);
    pop();
  }
};
