
export class TableSelection {
  static className = 'selected'
  constructor() {
    this.group = []
    this.current = null
  }
  select($el) {
    this.clear()
    this.group.push($el)
    $el.focus().addClass(TableSelection.className)
    this.current = $el
  }
  selectGroup($cells = []) {
    this.clear()
    this.group = $cells
    this.group.forEach( (cell) => {
      cell.addClass(TableSelection.className)
    })
  }
  clear() {
    if (this.group.length) {
      this.group.forEach($c => $c.removeClass(TableSelection.className))
      this.group = []
    }
  }
}
