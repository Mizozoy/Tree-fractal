let tree = [];
let leaves = [];
let count = 0;
function setup() {
  createCanvas(400, 400);

  let begin = createVector(width / 2, height);
  let end = createVector(width / 2, height - 100);
  let root = new Branch(begin, end);
  tree[0] = root;
}

function mousePressed() {
  for (let i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchLeft());
      tree.push(tree[i].branchRight());
    }
    tree[i].finished = true;
  }
  count++;
  if (count === 5) {
    for (let i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        let leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(51);
  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
  }
  for (let i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
  }
}
