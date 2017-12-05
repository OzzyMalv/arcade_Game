class Person {
    constructor(ctx, width = 30, height = 30, color = 'green', x = 50, y = 50) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 0;
        this.angle = 0;
        this.moveAngle = 0;
        this.x = x;
        this.y = y;
    }
    update(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();
        return this;
    }
    newPos(options, fieldSize) {
        this.moveAngle = 0;
        this.speed = 0;
        options.left && (this.moveAngle = -5);
        options.right && (this.moveAngle = 5);
        options.up && (this.speed = 5);
        options.down && (this.speed = -5);
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
        if (this.x > fieldSize.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = fieldSize.width;
        }
        if (this.y > fieldSize.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = fieldSize.height;
        }
        return this;
    }
}
export default Person;