import Vector3 from "./vector.js";
import {Grid} from "./grid.js";
import {GridRenderer} from "./gridRenderer.js";

const canvas = document.getElementById("canvas");
canvas.width = 200;
canvas.height = 200;
const ctx = canvas.getContext("2d");


let renderer = new GridRenderer(ctx, new Grid({
  renderLines: true
}))
renderer.render();