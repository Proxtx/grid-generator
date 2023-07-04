import Vector3 from "./vector.js";
import {Grid} from "./grid.js";
import {GridRenderer} from "./gridRenderer.js";

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");


let renderer = new GridRenderer(ctx, new Grid({
  renderLines: false
}))
renderer.render();