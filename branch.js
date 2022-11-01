function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.jitter = () => {
    this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  };

  this.show = () => {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };

  this.branchRight = () => {
    const dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 6);
    dir.mult(0.67);
    const newEnd = p5.Vector.add(this.end, dir);
    const right = new Branch(this.end, newEnd);
    return right;
  };

  this.branchLeft = () => {
    const dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4);
    dir.mult(0.67);
    const newEnd = p5.Vector.add(this.end, dir);
    const left = new Branch(this.end, newEnd);
    return left;
  };
}
