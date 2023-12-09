const table = document.querySelector('table');
const btns = document.querySelectorAll('button');

function addRow() {
    
    const newRow = table.insertRow(table.rows.length);
    for (let i = 0; i < table.rows[0].cells.length; i++) {
        let cell = newRow.insertCell(i);
        
    }
}

btns[0].addEventListener('click', addRow);

function deleteRow() {   
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}

btns[1].addEventListener('click', deleteRow);

function addColumn() {
    for (let i = 0; i < table.rows.length; i++) {
        let cell = table.rows[i].insertCell(table.rows[i].cells.length);
        
    }
}

btns[2].addEventListener('click', addColumn);

function deleteColumn() {
    if (table.rows[0].cells.length > 1) {
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
    }
}

btns[3].addEventListener('click', deleteColumn);
