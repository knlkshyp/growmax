const RetailInfo = require('./mongo/retailInfo.js'),
        app = require('./serverConfig.js'),
            growmax = require('./mongo/config.js');

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});   

app.post('/retail-data', (request, response) => {
    const retailInfo = new RetailInfo({
        scanType: request.body.scanType,
        empCode: request.body.empCode,
        outletCode: request.body.outletCode,
        outletName: request.body.outletName,
        ownerName: request.body.ownerName,
        contactNum: request.body.contactNum,
        outletAddr: request.body.outletAddr,
    });

    retailInfo.save().then((data) => {
            response.status(200).redirect('/');
        }, (err) => {
            response.status(400).send(err);
    });
});

app.get('/dashboard', (request, response) => {
    response.sendFile(__dirname + '/dashboard.html');
});

app.get('/order', (request, response) => {
    response.sendFile(__dirname + '/order.html');
});