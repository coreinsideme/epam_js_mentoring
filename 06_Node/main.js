function addMainRoute(app) {
    app.get('/main', function(req, res) {
        res.send('Greeting!!');
    });
}

module.exports = {
    addMainRoute: addMainRoute
};