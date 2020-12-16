// JavaScript source code
class Bob{
    constructor(holder, offsetX, offsetY, lengthOfString, scale) {
        
        this.scale = scale;
        this.values = { holder: holder, offsetX: offsetX, offsetY: offsetY, lengthOfString: lengthOfString };
        this.bob = Bodies.circle(holder.position.x + offsetX, holder.position.y + lengthOfString, scale, {
            restitution: 1,
            frictionAir: 0.0,
            inertia: Infinity,
            slop: 1,
            friction: 0
        });

        var ropeOptions = {
            bodyA: this.bob, bodyB: holder, pointB: { x: offsetX, y: offsetY }
        };

        this.rope = Constraint.create(ropeOptions);

        World.add(world, this.bob);
        World.add(world, this.rope);
    }

    display() {

        strokeWeight(5);
        line(this.bob.position.x, this.bob.position.y, this.values.holder.position.x + this.values.offsetX, this.values.holder.position.y + this.values.offsetY);
        strokeWeight(1);

        push();
        translate(this.bob.position.x, this.bob.position.y);
        rotate(this.bob.angle);
        circle(0, 0, this.scale * 2);
        pop();

    }
}