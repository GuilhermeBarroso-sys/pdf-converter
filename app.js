const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
var reader = new Reader();
var writer = new Writer();
async function main() {
    var data = await reader.read("./users.csv");
    var processorData = Processor.Process(data);
    var users = new Table(processorData);
    
    var html = await HtmlParser.Parse(users);
    console.log(html);
    writer.Write(Date.now() + ".html",html);
}

main();