function highlight(table) {
  let rows = table.getElementsByTagName('tr');
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    let cells = row.getElementsByTagName('td');

    let statusCell = cells[3];
    let status = statusCell.getAttribute('data-available');
    if (status === 'true') {
      row.classList.add('available');
    } else if (status === 'false') {
      row.classList.add('unavailable');
    }
    if (!status) {
      row.hidden = true;
    }
    let genderCell = cells[2];
    let gender = genderCell.textContent;

    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    let ageCell = cells[1];
    let age = parseInt(ageCell.textContent);

    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
