class Table {
    constructor(array) {
        this.header = array[0];
        array.shift(); // remover o array
        this.rows = array; 
    }

    get rowCount() {
        return this.rows.length;
    }
    get columnCount() {
        return this.header.length;
    }
}

module.exports = Table;