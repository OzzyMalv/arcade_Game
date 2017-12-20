class Enemies {
    constructor(ctx, width = 30, height = 30, color = 'red', x = 100, y = 100) {
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
    newPos(fieldSize) {
        this.x += Math.floor(Math.random() * 5) - 5; //до от
        this.y += Math.floor(Math.random() * 5) - 5;
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
export default Enemies;