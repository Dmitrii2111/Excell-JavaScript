import {ExcelComponent} from "@core/ExcelComponent";
import {$} from "@core/dom";

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }
  toHtml() {
    return `
    <div class="excel__formula__info">fx</div>
    <div class="excel__formula__input" 
    contenteditable spellcheck="false" data-type="formula-input"></div>
    `
  }
  init() {
    super.init();
    this.$input = this.$root.find('[data-type="formula-input"]')
    this.$on('table:select', $cell => {
      this.$input.text($cell.text())
    })
    this.$on('table:input', $cell => {
      this.$input.text($cell.text())
    })
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text())
  }
  onKeydown(event) {
    const keys = ['Enter', 'Tab']
    if (keys.includes(event.key)) {
      event.preventDefault()
      this.$emit('formula:enter')
    }
  }
}
