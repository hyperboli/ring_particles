//окно загружается
window.onload = function(){
    var canvas = document.getElementById("canvas");
    wnd = new Wnd();
    draw();
}

//обработка нажатия кнопки
document.addEventListener('keydown', function(event) {
    if(event.code=='KeyW'){
        wnd.camera.motion(true);
    }
    else if(event.code=='KeyS'){
        wnd.camera.motion(false);
    }

    //console.log("FFOF: ", event.code);
    draw();
});

//перерисование мира
function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.save();
    wnd.draw(ctx)
    ctx.restore();
}
