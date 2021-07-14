//корабль
class SpaceShip{
    constructor(){
        this.line = [[1], [2], [1]];
        this.compartments = []
        this.height = undefined;
        this.fill(this.line)
        this.give_height()
    }
}

//Заполнение корабля (пока в коде)
SpaceShip.prototype.fill = function(line){
    //console.log("Гы")
    for(var index = 0; index<line.length; ++index){
        var compartment = undefined;
        if(line[index][0]==1){
            compartment = new Cmp001(index);
        }
        else if(line[index][0]==2){
            compartment = new Cmp002(index);
        }
        this.compartments.push(compartment)
    }
}

SpaceShip.prototype.give_height = function(){
    this.height = 0;
    for(var index = 0; index<this.compartments.length; ++index){
        this.height+=this.compartments[index].height
    }
}

//рисование корабля
SpaceShip.prototype.draw = function(ctx, ca){
    //? пока корабль рисуется вертикально по умолчанию
    var x = 0; //псевдо координата для рисования
    ctx.save();

    ctx.translate(0, ca*this.height/2);

    //рисую отсеки
    for(var index = 0; index<this.compartments.length; ++index){
        var compartment = this.compartments[index];
        ctx.translate(0, 0+ca*(-compartment.height/2));
        compartment.draw(ctx, ca);
        last_height = compartment.height;
        ctx.translate(0, -ca*compartment.height/2);
        
    }
    ctx.restore();
}
