var wavep5;

var waveSketch = function (p) {

    p.numLines = 1000;
    p.ySquish = 0.5;
    p.h = 600;
    p.w = 300;
    p.inc = 0;
    p.offset;

    p.setup = function () {
        p.parent = document.getElementById('main');
        p.cnvX = p.parent.clientWidth;
        p.cnvY = p.parent.clientHeight;
        p.canvas = p.createCanvas(p.cnvX, p.cnvY);
        p.canvas.parent('main');
        p.strokeWeight(6);
        p.strokeCap(p.ROUND);
        p.stroke('rgba(19, 193, 232,0.1)');
        // p.offset = p.width / 2 - p.w;
        p.offset = (p.width - (p.w * 2)) / 2;
    }

    p.draw = function () {
        p.mouseMod = (p.mouseY/p.height)*0.7+0.1
        p.ySquish = (p.mouseY/p.height)*0.7+0.1;
        p.inc += 2.8;
        if (p.inc >= p.w * 2) {
            p.inc = 0;
        }
        p.incMod = p.inc;
        p.background(240);
        for (var i = 0; i < p.numLines; i += 3) {
            p.y = 100;
            p.x = (-(p.cos(p.PI * (i / p.numLines)) - 1) / 2) * p.w + p.offset
            p.yMod = p.sqrt(1 - p.pow((i / (p.numLines / 2)) - 1, 2)) * 200;
            p.yMod = (p.yMod * p.yMod / 200) * p.ySquish

            if (p.x + p.incMod >= p.w * 2 + p.offset - 1) {
                p.incMod -= p.w * 2 + 1;
            }


            p.line(p.x + p.incMod, 200 - p.yMod, p.x + p.incMod, 200 + p.h - p.yMod);
        }
        for (var i = 0; i < p.numLines; i += 3) {
            p.y = 100;
            p.x = (-(p.cos(p.PI * (i / p.numLines)) - 1) / 2) * p.w + p.offset
            p.yMod = p.sqrt(1 - p.pow((i / (p.numLines / 2)) - 1, 2)) * 200;
            p.yMod = (p.yMod * p.yMod / 200) * p.ySquish

            // if(x + incMod + w > 

            // line(w * 2 + offset, 0, w * 2 + offset, height);

            if (p.x + p.incMod + p.w >= p.w * 2 + p.offset - 1) {
                p.incMod -= p.w * 2;
            }


            p.line(p.x + p.incMod + p.w, 200 + p.yMod, p.x + p.incMod + p.w, 200 + p.h + p.yMod);
        }
    }
}

wavep5 = new p5(waveSketch);