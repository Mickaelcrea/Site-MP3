var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

can.addEventListener('mousemove', function(e) {
    var mouse = getMouse(e, can);
    redraw(mouse);
}, false);

var img_bg = new Image();
img_bg.onload = function() {
    redraw({x: -500, y: -500})
};
img_bg.src = '/static/image/maze3_3.png';

var img_fg = new Image();
img_fg.src = '/static/image/maze3_3neg.png';

function redraw(mouse) {
    console.log('a');
    can.width = can.width;
    ctx.drawImage(img_bg, 0, 0);
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 70, 0, Math.PI*2, true);
    ctx.save(); // Enregistrer l'état du contexte
    ctx.clip();
    ctx.drawImage(img_fg, 0, 0);
    ctx.restore(); // Restaurer l'état du contexte précédent
}

function getMouse(e, canvas) {
    var element = canvas,
        offsetX = 0,
        offsetY = 0,
        mx, my;

    // Compute the total offset. It's possible to cache this if you want
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;

    // We return a simple javascript object with x and y defined
    return {
        x: mx,
        y: my
    };
}
