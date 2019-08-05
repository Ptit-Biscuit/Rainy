class Particle {
  constructor(x, y, length) {
    this.vector = createVector(x, y);
    this.length = length;

    this.draw = () => {
      stroke(255);
      line(
        this.vector.x,
        this.vector.y,
        this.vector.x,
        this.vector.y + this.length
      );
    };

    this.update = speed => {
      this.vector.y += speed;

      if (this.vector.y + this.length > displayHeight) {
        this.vector.y = -displayHeight;
      }
    };
  }
}
