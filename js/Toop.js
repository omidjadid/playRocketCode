class Toop {
    x = 100;
    y = 200;
    radius = 50;
    clr = "blue";
    cmdX = 2; // 1: Boro , 2: Bargard;
    cmdY = 1; // 1: Boro , 2: Bargard;
    MinSpeed = 2;
    MaxSpeed = 5;
    speed = 4;
    _WPage;
    _HPage;
   audio;

   constructor(x, y, r, c, speedToop) {
        var a = 12;
        
        this.audio = new Audio('../file/Explosion1.mp3');
        this.audio.volume = .1;
        this.x = x;
        this.y = y;
        this.radius = r;
        this.clr = c;
        //this.speed = speedToop;
        this.speed = this.MinSpeed + Math.random() * (this.MaxSpeed - this.MinSpeed);
        var pg = new PageSet();
        this._WPage = pg._WPage;
        this._HPage = pg._HPage;
    }
    MyDraw = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = this.clr;
        ctx.fill();
    }
    MyStepMove = function () {

        if (this.cmdX == 1)
            this.x += this.speed;
        else if (this.cmdX == 2) {
            this.x -= this.speed;
        }

        if (this.x + this.radius > this._WPage){
            this.cmdX = 2; // Bargard
            this.audio.play();
        }
        else if (this.x - this.radius < 0) {
            this.cmdX = 1; // Boro
            this.audio.play();

        }

        if (this.cmdY == 1)
            this.y += this.speed;
        else if (this.cmdY == 2)
            this.y -= this.speed;

        if (this.y + this.radius > this._HPage)
            this.cmdY = 2; // Bargard
        else if (this.y - this.radius < 0)
            this.cmdY = 1; // Boro
    }

    SetPosition = function (x, y) {
        this.x = x;
        this.y = y;
    }
    getX = function () {
        return this.x;
    }
    getY = function () {
        return this.y;
    }

}