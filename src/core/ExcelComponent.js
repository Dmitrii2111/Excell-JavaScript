import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name
    this.prepare(options)
    this.emitter = options.emitter
    this.unsubscribers = []
  }
  prepare() {}
  // Возвращает шаблон компонента
  toHtml() {
    return ''
  }
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  init() {
    this.initDomListeners()
  }
  destroy() {
    this.removeDomListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
