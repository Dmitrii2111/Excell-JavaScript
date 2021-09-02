class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }
  clear() {
    this.html()
    return this
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }
  closest(selector) {
    return $(this.$el.closest(selector))
  }
  getCoords() {
    return this.$el.getBoundingClientRect()
  }
  get data() {
    return this.$el.dataset
  }
  find(selector, prefix) {
    if (prefix === 'all') {
      return this.$el.querySelectorAll(selector)
    }
    return $(this.$el.querySelector(selector))
  }
  css(styles = {}) {
    Object.keys(styles).forEach( key => {
      this.$el.style[key] = styles[key]
    })
  }
  addClass(className = '') {
    this.$el.classList.add(className)
  }
  removeClass(className = '') {
    this.$el.classList.remove(className)
  }
  focus() {
    this.$el.focus()
    return this
  }
  id(parse) {
    if (parse) {
      const parse = this.id().split(':')
      return {
        row: +parse[0],
        col: +parse[1]
      }
    }
    return this.data.id
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
