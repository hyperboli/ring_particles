//? js для хранения отсеков и работы с ними

//отсек
class Compartment{
    constructor(x) {
        this.x = x;
        this.width = undefined;
        this.height = undefined;    
        this.imgcode = undefined;    
        this.color = "red";    
    }
}

//рисование отсека
Compartment.prototype.draw = function(ctx, ca){
    ctx.save();

    ctx.strokeStyle = "#000"
    ctx.strokeRect(-this.width/2*ca, -this.height/2*ca, this.width*ca, this.height*ca);

    if(this.imgcode==undefined){
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.width/2*ca, -this.height/2*ca, this.width*ca, this.height*ca);
        ctx.strokeStyle = "#00f"
        ctx.strokeRect(-this.width/2*ca, -this.height/2*ca, this.width*ca, this.height*ca);
    }

    else{
        //ctx.rotate(-Math.PI/2);
        ctx.drawImage(this.imgcode, -this.width/2*ca, -this.height/2*ca, this.width*ca, this.height*ca);
    }
    ctx.restore();    
}


//flexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

class Cmp002 extends Compartment {
    constructor(x){
        super(x);
        this.width = WidthCmp002;
        this.height = HeightCmp002;
        this.imgcode = imgsmp2;    
        this.color = "#DC55DC";    
    }
}


class Cmp001 extends Compartment {
    constructor(x){
        super(x);
        this.width = WidthCmp001;
        this.height = HeightCmp001;
        this.imgcode = imgsmp1;    
        this.color = "#55DCDC";    
    }
}


//flexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

