import {ExcelComponent} from "@core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = 'excel__header'
  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    });
  }
  toHtml() {
    return `
      <input type="text" class="excel__header__input" placeholder="New Table">
      <div>
        <div class="button">
          <span class="material-icons">exit_to_app</span>
        </div>
        <div class="button">
          <span class="material-icons">delete_forever</span>
        </div>
      </div>
    `
  }
}
