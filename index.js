const express = require('express');
const app = express();
const { PORT } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//routes
app.use('/api/', apiRouter);

require('./db/mongoose');

app.listen(PORT, function() {
    console.log('server listening on port', PORT);
});