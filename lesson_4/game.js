const settings = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 5,
    startPositionY: 5
};

const player = {
    x: null,
    y: null,

    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    move(direction) {
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
                break;
        }
    }
};

const game = {
    settings,
    player,

    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);

        // this.render();
        while (true) {
            this.render();
            
            const direction = this.getDirection();

            if(direction === -1) return 'До свидания'

            this.player.move(direction);
        };
    },

    render() {
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
                if (row === this.player.y && col === this.player.x) {
                    map += 'O ';
                } else {
                    map += 'x ';
                }
            }
            map += '\n'
        }
        console.clear();
        console.log(map);
    },

    getDirection() {
        const availableDirection = [-1, 2, 4, 6, 8];

        while(true) {
            const direction = parseInt(prompt('Введите направление или -1 для выхода.'));

            if (!availableDirection.includes(direction)) {
                alert(`Вы ввели неверные данные, нужно ввести ${availableDirection.join(', ')}.`);
                continue;
            }

            return direction;
        }
    },
};

game.run();
