const fs = require("fs");
fs.writeFile("./dolph.txt", "O.o o.O",(error) => {
    if(error) {
        console.log(`error! ${error}`);
    }
});

fs.readFile("./dolph.txt",{encoding: 'utf-8'},(error, data ) => {
    if(error) {
        console.log(`Ocorreu um erro! ${error}`);
    }
    else {
        console.log(data);
    }

});

