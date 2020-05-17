const app = require('./serverConfig.js'),
        growmax = require('./mongo/config.js'),
            RetailInfo = require('./mongo/retailInfo.js'),
                OrderInfo = require('./mongo/orderInfo.js'),
                    EmpCodeInfo = require('./mongo/empCodeInfo.js'),
                        DistribInfo = require('./mongo/distribInfo.js'),
                            ProductInfo = require('./mongo/productInfo.js');

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});   

app.post('/retail-data', (request, response) => {
    const retailInfo = new RetailInfo({
        empCode: request.body.empCode,
        outletCode: request.body.outletCode,
        outletName: request.body.outletName,
        ownerName: request.body.ownerName,
        contactNum: request.body.contactNum,
        outletAddr: request.body.outletAddr,
        pin: request.body.pin,
        date: new Date().toDateString()
    });

    retailInfo.save().then(() => {
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

app.post('/order-data', (request, response) => {
    const orderInfo = new OrderInfo({
        empCode: request.body.empCode,
        distribCode: request.body.distribCode,
        outletCode: request.body.outletCode,
        productItem: request.body.productItem,
        quantity: request.body.quantity,
        date: new Date().toDateString()
    });

    orderInfo.save().then(() => {
            response.status(200).redirect('/order');
        }, (err) => {
            response.status(400).send(err);
    });
});

app.get('/distributor', (request, response) => {
    // response.sendFile(__dirname + '/distributor.html');
    response.send('Distributor page not found');
});

app.get('/login', (request, response) => {
    response.sendFile(__dirname + '/login.html');
});

app.post('/admin', (request, response) => {
    response.sendFile(__dirname + '/admin.html');
});

app.get('/empCodes', (request, response) => {
    EmpCodeInfo.find({}, {'employeeCode': 1}, (err, empCodes) => {
        if (err) return console.error(err);
        response.status(200).send(empCodes);
    });
});

app.get('/distrib', (request, response) => {
    DistribInfo.find({}, {'distribCode': 1}, (err, distribCodes) => {
        if (err) return console.error(err);
        response.status(200).send(distribCodes);
    });
});

app.get('/product', (request, response) => {
    ProductInfo.find({}, {'name': 1}, (err, productNames) => {
        if (err) return console.error(err);
        response.status(200).send(productNames);
    });
});

app.get('/productCost', (request, response) => {
    ProductInfo.find({}, {'cost': 1}, (err, productCosts) => {
        if (err) return console.error(err);
        response.status(200).send(productCosts);
    });
});