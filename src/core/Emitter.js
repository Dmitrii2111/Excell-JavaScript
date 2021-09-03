export class Emitter {
  constructor() {
    this.listeners = {}
  }
  // Уведомление о слушателе если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }
  //  Подписка на уведомление (нового слушателя)
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// const emitter  = new Emitter()
//
// const unsub = emitter.subscribe('Test', data => console.log('Sub:',data))
// emitter.emit('Test', [43, 'test'])
//
// setTimeout(() => {
//   emitter.emit('Test', 'After 2 seconds')
// }, 2000)
//
// setTimeout(() => {
//   unsub()
// }, 3000)
//
// setTimeout(() => {
//   emitter.emit('Test', 'After 4 seconds')
// }, 4000)

