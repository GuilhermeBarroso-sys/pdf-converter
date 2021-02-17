const Reader = require("./Reader");

var reader = new Reader();


async function main() {
    var data = await reader.read("./users.csv");
    console.log(data);
}

main();