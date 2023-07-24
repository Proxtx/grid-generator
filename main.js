import Vector3 from "./vector.js";
import {Grid} from "./grid.js";
import {GridRenderer} from "./gridRenderer.js";

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let g = new Grid({
  renderLines: false
});
let renderer = new GridRenderer(ctx, g)
let renderer2 = new GridRenderer(ctx, new Grid({
  renderLines: false,
  rotation: 0
}))
renderer.render();

for(; g.options.rotation >= 0; g.options.rotation-=0.1){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  g.options.translateX-=0.1;
  g.options.translateY -= 0.1;
  g.options.cellWidth += 0.1;
  g.options.cellHeight += 0.1
  g.options.width += 0.01;
  renderer.render();
  await new Promise(r=> setTimeout(r, 5))
}
//renderer2.render();