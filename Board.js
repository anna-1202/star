class Board {
    width = 0;
    height = 0;
    arr = [];


    constructor(width, height) {
        console.log("New instance of Board created");
        this.width = width;
        this.height = height;
        this.fillArray();


    }

    fillArray() {
        this.arr = new Array(this.height);
        let arr = this.arr;
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(this.width);
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                arr[i][j] = "-";
            }
        }
    }

    forward (isClean) {
        for (let j = 0; j < this.arr[0].length; j++) {
            this.arr[0][j] = symbol;
            if (isClean) {
                this.arr[0][j - 1] = " ";
            }

        }
    }

    down(isClean) {
        for (let i = 1; i < arr.length; i++) {
            arr[i][width - 1] = symbol;
            if (isClean) {
                arr[i - 1][width - 1] = " ";
            }
        }
    }

    back(isClean) {
        for (let j = width - 2; j >= 0; j--) {
            arr[height - 1][j] = symbol;
            if (isClean) {
                arr[height - 1][j + 1] = " ";
            }
        }
    }

    up(isClean) {
        for (let i = height - 2; i >= 0; i--) {
            arr[i][0] = symbol;
            if (isClean) {
                arr[i + 1][0] = " ";
            }
        }
    }




}

module.exports = Board