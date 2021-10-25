const express = require('express');
const app = express();
const { PORT } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.urlencoded({extended: false})); 
app.use(express.json());   
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
//routes
app.use('/api/', apiRouter);

require('./db/mongoose');

app.listen(PORT, function() {
    console.log('server listening on port', PORT);
});