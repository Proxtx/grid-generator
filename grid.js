export class Grid {
  constructor (options) {
    this.setOptions(options)
  }
  
  setOptions (options){
    this.options = {
      color: "black",
      renderLines: false,
      cellWidth: 15,
      cellHeight: 15,
      rotation: 20,
      translateX: 0,
      translateY: 0,
      width: 2,
      rows: 20,
      columns: 20,
      intersectionType: "cross",
      ...options
    }
  }
}