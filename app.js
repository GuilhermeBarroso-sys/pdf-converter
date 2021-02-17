const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
var reader = new Reader();


async function main() {
    var data = await reader.read("./users.csv");
    var processorData = Processor.Process(data);
    var users = new Table(processorData);
    
    var html = await HtmlParser.Parse(users);
    console.log(html);
    
}

main();