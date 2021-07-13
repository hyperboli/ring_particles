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
    ctx.strokeRect(-this.height/2*ca, -this.width/2*ca, this.height*ca, this.width*ca);

    if(this.imgcode==undefined){
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.height/2*ca, -this.width/2*ca, this.height*ca, this.width*ca);
        ctx.strokeStyle = "#00f"
        ctx.strokeRect(-this.height/2*ca, -this.width/2*ca, this.height*ca, this.width*ca);
    }

    else{
        ctx.rotate(-Math.PI/2);
        ctx.drawImage(this.imgcode, -this.width/2*ca, -this.height/2*ca, this.width*ca, this.height*ca);
    }
    ctx.restore();    
}


//flexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


class Cmp001 extends Compartment {
    constructor(x){
        super(x);
        this.width = WidthCmp001;
        this.height = HeightCmp001;
        this.color = "#55DCDC";    
    }
}

//отсек солнечных панелей #2
class Cmp002 extends Compartment {
    constructor(x){
        super(x);
        this.width = WidthCmp002;
        this.height = HeightCmp002;
        this.color = "#DC55DC";    
    }
}


//flexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


//отсек управления #1
class MainCmp extends Compartment {
    constructor(x){
        super(x);
        this.width = MainCmpWidth;s
        this.height = MainCmpHeight;
        this.color = "#55DCDC";    
    }
}

//отсек солнечных панелей #2
class SunCmp extends Compartment {
    constructor(x){
        super(x);
        this.width = SunCmpWidth;
        this.height = SunCmpHeight;
        //this.imgcode = suncmpimg;
        this.color = "#DC55DC";    
    }
}

//отсек еды #3
class EatCmp extends Compartment {
    constructor(x){
        super(x);
        this.width = EatCmpWidth;
        this.height = EatCmpHeight;
        //this.imgcode = eatcmpimg; //класс canvas изображения
        this.color = "#DCDC55";    
    }
}