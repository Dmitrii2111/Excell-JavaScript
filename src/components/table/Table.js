import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resizeHandler} from "@/components/table/table.resize";
import {shouldResize} from "@/components/table/table.functions";


export class Table extends ExcelComponent {
  static className = 'excel__table'
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    });
  }
  toHtml() {
    return createTable(50)
  }
  onClick(event) {
    // console.log('click', event.target)
  }
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(event, this.$root)
    }
  }
  onMousemove() {
    // console.log('mousemove')
  }
  onMouseup() {
    // console.log('mouseup')
  }
}
