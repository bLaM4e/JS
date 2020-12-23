'use strict';

const settings = {
    rowCount: 8,
    colCount: 8,
    column: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    figureFirstLine: 'П',
    figureSecondLine: ['Л', 'К', 'С', 'К', 'Ф', 'С', 'К', 'Л']
};

const render = {
    settings,

    initFirstLastRow() {
        const trElem = document.createElement('tr');
        for(let numerateCol = 0; numerateCol <= this.settings.colCount + 1; numerateCol++) {
            const tdElem = document.createElement('td');
            trElem.appendChild(tdElem);
            if (numerateCol !== 0 && numerateCol !== 9) tdElem.textContent = numerateCol; 
        }
        document.getElementById('chess').appendChild(trElem);
    },

    initFirstLine() {
        const firstLine = document.createElement('tr');
        for(let col = 0; col < this.settings.colCount; col++) {
            // let cell = document.createElement('td');
            // firstLine.appendChild(cell)
            firstLine.insertAdjacentHTML('beforeend', `<td>${this.settings.figureFirstLine}</td>`)
        }
        document.getElementById('chess').appendChild(firstLine);
    },

    init() {
        this.initFirstLastRow();

        this.initFirstLine();

        for(let row = 0; row < this.settings.rowCount; row++) {
            const trEl = document.createElement('tr');
            document.getElementById('chess').appendChild(trEl);
            trEl.insertAdjacentHTML('afterbegin', `<td>${this.settings.column[row]}</td>`);

            for(let col = 0; col < this.settings.colCount; col++) {
                const tdEl = document.createElement('td');
                trEl.appendChild(tdEl);

                if (row % 2 === 0) {
                    (col % 2 === 0) ? (tdEl.style.backgroundColor = 'black') : (tdEl.style.backgroundColor = 'white')
                } else {
                    (col % 2 !== 0) ? (tdEl.style.backgroundColor = 'black') : (tdEl.style.backgroundColor = 'white')
                }
            }

            trEl.insertAdjacentHTML('beforeend', `<td>${this.settings.column[row]}</td>`);
        }
        
        this.initFirstLastRow();
    }
};

render.init();
