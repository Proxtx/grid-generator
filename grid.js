export class Grid {
  constructor (options) {
    this.setOptions(options)
  }
  
  setOptions (options){
    this.options = {
      color: "black",
      renderLines: true,
      cellWidth: 10,
      cellHeight: 10,
      rotation: 0,
      translateX: 0,
      translateY: 0,
      width: 2,
      rows: 20,
      columns: 20,
      intersectionType: "circle",
      ...options
    }
  }
}