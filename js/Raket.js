class Raket {
    w = 25;
    h = 180;
    x = 0;
    y = 0;
    mecolor = "yellow";
    cmdY = -1; // 1: Boro , 2: Bargard;
    speed = 6;
    keyCodeMe1;
    _WPage;
    _HPage;
    clrRaket = 'green';
    
    constructor(mycolor, x, upKey, dwnKey, stpKey, speedRaket) {
        
        var pg = new PageSet();
        this._WPage = pg._WPage;
        this._HPage = pg._HPage;
        this.mecolor = mycolor;
        this.x = x;//_WPage - 2* this.w;
        this.y = this._HPage - this.h;
        this.speed = speedRaket;
        this.keyCodeMe1 = new KeyCodeMe(upKey, dwnKey, stpKey);

    }
    MyDrawR = function (ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.clrRaket;
        ctx.fillRect(this.x, this.y, this.w, this.h);

        //ctx.stroke();
    }
    MyStepMoveR = function () {
        if (this.cmdY == 2)
            this.y -= this.speed;
        else if (this.cmdY == 1)
            this.y += this.speed;
        //this.cmdY=0;

        if (this.y + this.h > this._HPage) {
            this.cmdY = 2; // Bargard
            this.keyCodeMe1.dir1 = 2;
        }
        else if (this.y < 0) {
            this.cmdY = 1; // Boro
            this.keyCodeMe1.dir1 = 1;
        }

        this.cmdY = this.keyCodeMe1.dir1;
        //console.log(this.h,this.y,_HPage,this.cmdY);
    }

    ChangeColor = function()
    {
        var _obj = this;
        _obj.clrRaket = 'red';
        var timer = setInterval(function ()
        {
            _obj.clrRaket = 'green';
            clearInterval(timer);
        }, 200);
    }


}
