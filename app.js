const Reader = require("./Reader");
const Processor = require("./Processor");
var reader = new Reader();


async function main() {
    var data = await reader.read("./users.csv");
    Processor.Process(data);
}

main();