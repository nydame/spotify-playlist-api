const routes = require('./routes/routes');

module.exports = function(app, db) {
    routes(app, db);
};
