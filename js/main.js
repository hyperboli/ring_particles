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

function setpixelated(context){
    context['imageSmoothingEnabled'] = false;       /* standard */
    context['mozImageSmoothingEnabled'] = false;    /* Firefox */
    context['oImageSmoothingEnabled'] = false;      /* Opera */
    context['webkitImageSmoothingEnabled'] = false; /* Safari */
    context['msImageSmoothingEnabled'] = false;     /* IE */
}

//перерисование мира
function draw() {
    var canvas = document.getElementById("canvas");
    setpixelated(canvas.getContext('2d'))
    var ctx = canvas.getContext("2d");
    ctx.save();
    wnd.draw(ctx)
    ctx.restore();
}
