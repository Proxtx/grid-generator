import Vector3 from "./vector.js";

export class GridRenderer {
  constructor (ctx, grid){
    this.ctx = ctx;
    this.grid = grid;
  }
  
  genDirectionVectors (){
    let xV = (new Vector3()).byDegree(this.grid.options.rotation);
    let yV = (new Vector3()).byDegree(this.grid.options.rotation + 90);
    
    this.vectorX = xV.multiply(this.grid.options.cellWidth / xV.length())
    this.vectorY = yV.multiply(this.grid.options.cellHeight / yV.length())
  }
  
  genIntersections () {
    let start = new Vector3(this.grid.options.translateX, this.grid.options.translateY);
    let arr = [];
    for(let column = 0;column<this.grid.options.columns;column++){
      arr.push([]);
      for(let row = 0;row<this.grid.options.rows;row++){
        arr[column].push(start.add(this.vectorX.multiply(column)).add(this.vectorY.multiply(row)));
      }
    }
    
    this.intersections = arr;
  }
  
  render (){
    this.genDirectionVectors();
    this.genIntersections();
    this.renderIntersections();
    if(this.grid.options.renderLines) this.renderLines();
  }
  
  renderIntersections (){
    for(let column of this.intersections) for(let intersection of column){
      this.renderIntersection(intersection)
    }
  }
  
  renderIntersection (position){
    switch (this.grid.options.intersectionType){
      case "circle":
        this.ctx.beginPath();
        this.ctx.fillStyle = this.grid.options.color;
        this.ctx.arc(position.x, position.y, this.grid.options.width/2, 0, 2 * Math.PI);
        this.ctx.fill();
        break;
      case "square":
        this.ctx.save()
        this.ctx.fillStyle = this.grid.options.color;
        this.ctx.translate(position.x-this.grid.options.width/2, position.y-this.grid.options.width/2)
        this.ctx.rotate(this.grid.options.rotation * (Math.PI / 180))
        this.ctx.fillRect(0, 0, this.grid.options.width, this.grid.options.width);
        this.ctx.restore();
        break;
      case "cross":
        this.ctx.save()
        this.ctx.fillStyle = this.grid.options.color;
        this.ctx.translate(position.x, position.y)
        this.ctx.rotate(this.grid.options.rotation * (Math.PI / 180))
        this.ctx.fillRect(-(this.grid.options.width*1.5), -this.grid.options.width/2, this.grid.options.width*3, this.grid.options.width);
        this.ctx.fillRect(-this.grid.options.width/2, -(this.grid.options.width*1.5), this.grid.options.width, this.grid.options.width*3);
        this.ctx.restore();
        break;
        //TODO Square, Kross (Kross arm length option)
    }
  }
  
  renderLines () {
    for(let column of this.intersections){
      this.drawLine(column[0], column.at(-1))
    }
    for(let row in this.intersections[0]){
      this.drawLine(this.intersections[0][row], this.intersections.at(-1)[row]);
    }
  }
  
  drawLine(from, to){
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.grid.options.color;
    this.ctx.lineWidth = this.grid.options.width;
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
  }
}