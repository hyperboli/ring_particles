//класс камера, x, y - куда указывает
//approximation - увеличение (приближение)
class Camera{
    constructor(x, y, approximation, angle){
        this.x = x;
        this.y = y;
        this.approximation = approximation;
        this.angle = angle;
    }
}

Camera.prototype.motion = function(direction){
    if(direction){
        this.y+=cameraSpeed;
    }
    else{
        this.y-=cameraSpeed;
    }
}