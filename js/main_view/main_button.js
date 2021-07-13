//? js важная кнопка
class MainButton{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = undefined;
        this.h = undefined;
        this.imgcode = undefined;    
        this.color = "red";    
    }
}

//кнопка настроек корабля
class shipShapeButton extends MainButton {
    constructor(x, y){
        super(x, y);
        this.w = mainButtonShestW;
        this.h = this.w;
        this.imgcode = mainbutton_shest;
        this.color = "#55DCDC";    
    }
}

//кнопка добавления ячейки корабля
class plusShapeButton extends MainButton {
    constructor(x, y){
        super(x, y);
        this.w = mainButtonShestW;
        this.h = this.w;
        this.imgcode = mainbutton_plus;
        this.color = "#55DCDC";    
    }
}

MainButton.prototype.draw = function(ctx){
    ctx.save();

    ctx.translate(this.x, this.y);

    if(this.imgcode==undefined){
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.h/2, -this.w/2, this.h, this.w);
        ctx.strokeStyle = "#00f"
        ctx.strokeRect(-this.h/2, -this.w/2, this.h, this.w);
    }

    else{
        ctx.drawImage(this.imgcode, -this.w/2, -this.h/2, this.w, this.h);
    }

    ctx.restore();    
}

