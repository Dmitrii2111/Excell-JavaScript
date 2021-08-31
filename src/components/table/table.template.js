const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="excel__table__row__data__cell" contenteditable></div>
  `
}

function createCol(content) {
  return `
    <div class="excel__table__row__data__column">${content}</div>
  `
}

function createRow(content, info) {
  return `
    <div class="excel__table__row">
        <div class="excel__table__row__info">${info}</div>
        <div class="excel__table__row__data">${content}</div>
    </div>
    `
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount).fill('')
      .map((el, index) => {
        return String.fromCharCode(CODES.A + index)
      })
      .map( el => {
        return createCol(el)
      })
      .join('')
  rows.push(createRow(cols, ''))
  for (let i = 0; i < rowsCount; i++) {
    // eslint-disable-next-line no-undef
    const cells = new Array(colsCount).fill('').map(createCell).join('')
    rows.push(createRow( cells, (i+1)))
  }
  return rows.join('')
}
