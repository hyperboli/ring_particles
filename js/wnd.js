//окно для рисования 
//пока здесь хранится и создаётся всё, может поправим
class Wnd{
    constructor(){
        this.w = 800
        this.h = 800
        this.camera = new Camera(0, 0, 0.5, 0);
        this.spaceship = new SpaceShip();
    }
}

//рисование окна
Wnd.prototype.draw = function(ctx){
    ctx.save();

    //фон
    ctx.fillStyle = "#91CCD8";
    ctx.fillRect(0, 0, this.w, this.h);
    ctx.strokeStyle = "#00f";
    ctx.strokeRect(0, 0, this.w, this.h);

    ctx.strokeStyle = "#d33";
    ctx.beginPath();      
    ctx.moveTo(0, this.h/2);    
    ctx.lineTo(this.w, this.h/2); 
    ctx.moveTo(this.w/2, 0);    
    ctx.lineTo(this.w/2, this.h);  
    ctx.stroke();          

    //параметры камеры
    var cx = this.camera.x;
    var cy = this.camera.y;
    //var ca = this.camera.approximation;
    //var cg = this.camera.angle;

    //корабль
    ctx.translate(this.w/2, this.h/2);
    //ctx.rotate(cg);
    ctx.translate(-cx, -cy);
    this.spaceship.draw(ctx, OnePix);
    ctx.restore()

    //кнопка настройки корабля (добавление)
    //this.shipshape_button.draw(ctx);
    //this.plusshape_button.draw(ctx);

    ctx.restore()
}

