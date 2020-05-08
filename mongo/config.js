const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/growmax', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const growmax = mongoose.connection;

growmax.on('error', console.error.bind(console, 'connection error: '));
growmax.once('open', function() {
    console.log('Connected to the database');
});

module.exports = growmax;