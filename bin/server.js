const app = require('../src/app');
const port = normalizaPort(process.env.PORT || '3000');
const bodyParser = require('body-parser');
require("dotenv-safe").load();
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const http = require('http');
const httpProxy = require('express-http-proxy');
const userServiceProxy = httpProxy('http://localhost:3001');
const productsServiceProxy = httpProxy('http://localhost:3002');
const cors = require("cors");

// parse requests of content-type - application/json
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})