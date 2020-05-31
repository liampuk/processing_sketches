var wavep5;

var waveSketch = function (p) {

    p.numLines = 300;
    p.ySquish = 0.5;
    p.h = 600;
    p.w = 300;

    p.setup = function () {
        p.parent = document.getElementById('main');
        p.cnvX = p.parent.clientWidth;
        p.cnvY = p.parent.clientHeight;
        p.canvas = p.createCanvas(p.cnvX, p.cnvY);
        p.canvas.parent('main');
        p.strokeWeight(5);
        p.strokeCap(p.ROUND);
        p.stroke('rgba(240, 176, 0,0.4)');
        p.offset = p.width/2-p.w;
    }

    p.draw = function () {
        p.background(240);
        for (var i = 0; i < p.numLines; i += 3) {
            p.y = 100;
            p.x = (-(p.cos(p.PI * (i / p.numLines)) - 1) / 2) * p.w + p.offset
            p.yMod = p.sqrt(1 - p.pow((i / (p.numLines / 2)) - 1, 2)) * 200;
            p.yMod = (p.yMod * p.yMod / 200) * p.ySquish

            p.line(p.x, 200 - p.yMod, p.x, 200 + p.h - p.yMod);
        }
        for (var i = 0; i < p.numLines; i += 3) {
            p.y = 100;
            p.x = (-(p.cos(p.PI * (i / p.numLines)) - 1) / 2) * p.w + p.offset
            p.yMod = p.sqrt(1 - p.pow((i / (p.numLines / 2)) - 1, 2)) * 200;
            p.yMod = (p.yMod * p.yMod / 200) * p.ySquish

            p.line(p.x + p.w, 200 + p.yMod, p.x + p.w, 200 + p.h + p.yMod);
        }
    }
}

wavep5 = new p5(waveSketch);