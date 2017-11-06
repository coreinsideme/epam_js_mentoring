var fs = require('fs');
var csv = require('fast-csv');

var fileStream = fs.createReadStream('medicals.csv');
var parser = csv();

function addMedicalsRoute(app) {
    app.get('/medicals', function(req, res) {

        var result = [];

        fileStream
        .on("readable", function () {
            var data;
            while ((data = fileStream.read()) !== null) {
                parser.write(data);
            }
        })
        .on("end", function () {
            parser.end();
        });

        parser
        .on("readable", function () {
            var data;
            while ((data = parser.read()) !== null) {
                result.push(data);
            }
        })
        .on("end", function () {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(result));
        });
    });
}

module.exports = {
    addMedicalsRoute: addMedicalsRoute
};