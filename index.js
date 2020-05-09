const RetailInfo = require('./mongo/retailInfo.js'),
        app = require('./serverConfig.js'),
            growmax = require('./mongo/config.js');

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});   

app.post('/data', (request, response) => {
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
            response.header('Access-Control-Allow-Origin', '*').status(200).redirect('/');
        }, (err) => {
            response.status(400).send(err);
    });

});