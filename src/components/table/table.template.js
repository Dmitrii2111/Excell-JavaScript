const CODES = {
  A: 65,
  Z: 90
}

function createCell(col, row) {
  return `
    <div 
        class="excel__table__row__data__cell" 
        contenteditable 
        data-col="${col}"
        data-type="cell"
        data-id="${row}:${col}"
        >
</div>
  `
}

function createCol(content, index) {
  return `
    <div class="excel__table__row__data__column" 
        data-type="resizable" 
        data-col="${index}">
        ${content}
        <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(content, info) {
  const resize = info ? ' <div class="row-resize" data-resize="row"></div>' : ''
  return `
    <div class="excel__table__row" data-type="resizable">
        <div class="excel__table__row__info">
            ${info ? info: ''}
            ${resize}
        </div>
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
      .map( (el, index) => {
        return createCol(el, index)
      })
      .join('')
  rows.push(createRow(cols, null))
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map((_, col) => createCell(col, row))
        .join('')
    rows.push(createRow( cells, (row+1)))
  }
  return rows.join('')
}
