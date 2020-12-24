'use strict';

const settings = {
    rowCount: 8,
    colCount: 8,
    rowName: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
};

const render = {
    settings,

    init() {
        const trElem = document.createElement('tr');
        for(let numerateCol = 0; numerateCol <= this.settings.colCount + 1; numerateCol++) {
            const tdElem = document.createElement('td');
            trElem.appendChild(tdElem);
            if (numerateCol !== 0 && numerateCol !== 9) tdElem.textContent = numerateCol; 
        }
        document.getElementById('chess').appendChild(trElem);

        for(let row = 0; row < this.settings.rowCount; row++) {
            const trEl = document.createElement('tr');
            document.getElementById('chess').appendChild(trEl);
            trEl.insertAdjacentHTML('afterbegin', `<td>${this.settings.rowName[row]}</td>`);

            for(let col = 0; col < this.settings.colCount; col++) {
                const tdEl = document.createElement('td');
                trEl.appendChild(tdEl);

                if(row === 1 || row === 6) tdEl.textContent = 'П';

                if(row === 0 || row === 7) {
                    switch(col) {
                        case 0:
                        case 7:
                            tdEl.textContent = 'Л';
                            break;
                        case 1:
                        case 6:
                            tdEl.textContent = 'К';
                            break;
                        case 2:
                        case 5:
                            tdEl.textContent = 'С';
                            break;
                        case 3:
                            tdEl.textContent = 'К';
                            break;
                        case 4:
                            tdEl.textContent = 'Ф';
                            break;
                    }
                }

                if (row % 2 === 0) {
                    (col % 2 === 0) ? (tdEl.style.backgroundColor = 'black') : (tdEl.style.backgroundColor = 'white')
                } else {
                    (col % 2 !== 0) ? (tdEl.style.backgroundColor = 'black') : (tdEl.style.backgroundColor = 'white')
                }
            }

            trEl.insertAdjacentHTML('beforeend', `<td>${this.settings.rowName[row]}</td>`);
        }
        
        document.getElementById('chess').appendChild(trElem.cloneNode(true));
    }
};

render.init();
