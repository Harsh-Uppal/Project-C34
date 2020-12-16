// JavaScript source code
class BobHolder {
    constructor(x, y, width, height) {
        this.object = Bodies.rectangle(x, y, width, height, { isStatic: true });
        this.scales = { width: width, height: height };
        World.add(world, this.object);
    }

    display() {
        push();
        translate(this.object.position.x, this.object.position.y);
        rotate(this.object.angle);
        rect(0, 0, this.scales.width, this.scales.height);
        pop();
    }
}