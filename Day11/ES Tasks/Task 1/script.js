class Polygon {
  constructor() {
    if (new.target === Polygon) {
      throw new Error("something wrong");
    }
  }

  toString() {
    return `${this.constructor.name} area=${this.area}`;
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  toString() {
    return `Rectangle width=${this.width}, height=${this.height}, area=${this.area}`;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  toString() {
    return `Square side=${this.width}, area=${this.area}`;
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  toString() {
    return `Circle radius=${this.radius}, area=${this.area}`;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  get area() {
    return 0.5 * this.base * this.height;
  }

  toString() {
    return `Triangle base=${this.base}, height=${this.height}, area=${this.area}`;
  }
}

const shapes = [
  new Rectangle(400, 200),
  new Square(200),
  new Circle(100),
  new Triangle(400, 320),
];

for (const s of shapes) {
  console.log(s.toString());
}
