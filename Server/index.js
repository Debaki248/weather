console.log("inside index.js");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('../Server/db/db');
const routers = require('./router/routes');
//middleware
app.use(bodyParser.json());
app.use(cors());

app.listen(9000 ,() => {
    console.log("listening at port no - 9000")
})
app.use('/api',routers);