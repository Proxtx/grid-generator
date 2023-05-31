export class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = Number(x);
    this.y = Number(y);
    this.z = Number(z);
  }

  multiply(n) {
    if (n instanceof Vector3)
      return new Vector3(this.x * n.x, this.y * n.y, this.z * n.z);
    else return new Vector3(this.x * n, this.y * n, this.z * n);
  }

  flatten() {
    return this.x + this.y + this.z;
  }

  invert() {
    return this.multiply(-1);
  }

  normal(n) {
    return new Vector3(
      this.y * n.z - this.z * n.y,
      this.z * n.x - this.x * n.z,
      this.x * n.y - this.y * n.x
    );
  }

  length() {
    return Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
    );
  }

  add(n) {
    return new Vector3(this.x + n.x, this.y + n.y, this.z + n.z);
  }

  subtract(n) {
    return this.add(n.multiply(-1));
  }

  dot(n) {
    return this.multiply(n).flatten();
  }

  random() {
    return new Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    );
  }

  normalize() {
    let t =
      1 /
      Math.sqrt(
        Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
      );

    return this.multiply(t);
  }

  lerp(n, alpha) {
    return new Vector3(
      lerp(this.x, n.x, alpha),
      lerp(this.y, n.y, alpha),
      lerp(this.z, n.z, alpha)
    );
  }
  
  byDegree (deg) {
    let rad = deg * (Math.PI/180)
    return new Vector3(
      Math.cos(rad),
      Math.sin(rad)
    )
  }
}

export default Vector3;

const lerp = (a, b, alpha) => {
  return a + alpha * (b - a);
};