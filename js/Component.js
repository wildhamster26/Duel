class Component {
    constructor(ctx, size = 10, color ="purple", x, y, vx=0, vy=0) {
        this.ctx = ctx
        this.size = size
        this.color = color
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    draw() {
        this.ctx.save()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
        this.ctx.restore()
    }
    update(){
        this.x += this.vx
        this.y += this.vy
    }
}