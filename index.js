const express = require('express');
const port = 3000;

const app = express();
 
app.get('/', (req, res) => {
    app.use(express.static('.'));
    res.sendFile(__dirname + '/new.html');
});
     	       
app.listen(port, () => {
     	console.log(`Server up on port ${port}.`);
     	});
