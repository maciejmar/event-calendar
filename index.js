const express = require('express');
const app = express();
const { PORT } = require('./config');
const apiRouter = require('./routes/api');
//routes
app.use('/', apiRouter);

require('./db/mongoose');

app.listen(PORT, function() {
    console.log('server listening on port', PORT);
});