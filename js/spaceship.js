//корабль
class SpaceShip{
    constructor(){
        this.line = [[1], [2], [1]];
    }
}

//рисование корабля
SpaceShip.prototype.draw = function(ctx, ca){
    //? пока корабль рисуется вертикально по умолчанию
    var height_ship = 0; //полная длина корабля
    var x = 0; //псевдо координата для рисования
    ctx.save();
    for(var index = 0; index<this.line.length; ++index){
        if(this.line[index][0]==1){
            height_ship+=HeightCmp001;
        }
        else if(this.line[index][0]==2){
            height_ship+=HeightCmp002;
        }
    }

    ctx.translate(0, ca*height_ship/2);

    //рисую отсеки
    for(var index = 0; index<this.line.length; ++index){
        var compartment = undefined;
        if(this.line[index][0]==1){
            //отсек 
            compartment = new Cmp001(index);
        }
        else if(this.line[index][0]==2){
            compartment = new Cmp002(index); 
        }
        ctx.translate(0, 0+ca*(-compartment.height/2));
        compartment.draw(ctx, ca);
        last_height = compartment.height;
        ctx.translate(0, -ca*compartment.height/2);
        
    }
    ctx.restore();
}
