import {ExcelComponent} from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    });
  }
  toHtml() {
    return `
    <div class="excel__formula__info">fx</div>
    <div class="excel__formula__input" contenteditable spellcheck="false"></div>
    `
  }
  onInput(event) {
    console.log(this.$root)
    console.log('Formula on input', event)
  }
  onClick(event) {
    console.log('onclick', event)
  }
}
