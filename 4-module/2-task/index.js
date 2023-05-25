function makeDiagonalRed(table) {
  // ваш код...
    let rows = table.rows;
    let rowCount = rows.length;
    let colCount = rows[0].cells.length;
    let diagonalCount = Math.min(rowCount, colCount);
    for (let i = 0; i < diagonalCount; i++) {
      rows[i].cells[i].style.backgroundColor = 'red';
      rows[i].cells[i].style.textDecoration = 'line-through';

    }
  }


