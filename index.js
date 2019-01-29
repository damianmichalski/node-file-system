var fs = require('fs');
var colors = require('colors');
fs.readdir('./', function(err, data) {
    if (err) throw err;
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.writeFile('./tekstNowy.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
    });
});