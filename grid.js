export class Grid {
  constructor (options) {
    this.setOptions(options)
  }
  
  setOptions (options){
    this.options = {
      color: "black",
      renderLines: true,
      cellWidth: 15,
      cellHeight: 15,
      rotation: 20,
      translateX: 0,
      translateY: -250,
      width: 2,
      rows: 80,
      columns: 80,
      intersectionType: "cross",
      ...options
    }
  }
}