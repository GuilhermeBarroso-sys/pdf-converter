class Processor {
    static Process(data) {
        var index = data.split("\n");
        var rows = [];
        index.forEach(row => {
            var array = row.split(",");
            rows.push(array);
        })
        return rows;
    }
}

module.exports = Processor;