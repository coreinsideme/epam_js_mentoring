var express = require('express');
var app = express();

var main = require('./main');
var medicals = require('./medicals');

app.get('/', function (req, res) {
    res.redirect('/main');
});

main.addMainRoute(app);
medicals.addMedicalsRoute(app);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});