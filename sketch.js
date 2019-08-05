const MAX_PARTICLES = 2500;
const PARTICLE_LENGTH = 25;
const BASE_SPEED = 42;
const ANGLE = 25;

var particles = [];
var rain;

function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);

  rain = loadSound('./rain-sound.mp3', () => rain.play());

  for (var i = 0; i < MAX_PARTICLES; i++) {
    this.particles.push(
      new Particle(
        displayWidth * random(-1, 2),
        -displayHeight * random(),
        PARTICLE_LENGTH * random()
      )
    );
  }
}

function draw() {
  background(0, 0, 30);
  translate(displayWidth / 2, displayHeight / 2);
  rotate(ANGLE);

  for (var p of this.particles) {
    p.draw();
    p.update(BASE_SPEED * random());
  }
}
