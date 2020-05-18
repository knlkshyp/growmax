const express = require('express'),
        bodyParser = require('body-parser');

const port = 3005;

const app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.listen(port, () => {
    console.log(`Server up on port: ${port}`);
});

module.exports = app;