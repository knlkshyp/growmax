let { app, upload, xlsx, path, file} = require('./serverConfig.js'),
        growmax = require('./mongo/config.js'),
            RetailInfo = require('./mongo/retailInfo.js'),
                OrderInfo = require('./mongo/orderInfo.js'),
                    EmployeeCode = require('./mongo/empCodeInfo.js'),
                        DistribInfo = require('./mongo/distribInfo.js'),
                            ProductInfo = require('./mongo/productInfo.js'),
                                OutletCode = require('./mongo/outletCode.js'),
                                    AdminInfo = require('./mongo/adminInfo.js');

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/login.html');
}); 

app.get('/register', (request, response) => {
    response.sendFile(__dirname + '/index.html');
}); 

app.get('/login', (request, response) => {
    response.sendFile(__dirname + '/adminLogin.html');
}); 

app.get('/distrib-data', (req, res) => {
    DistribInfo.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});

app.post('/retail-data', (request, response) => {
    let retailInfo = new RetailInfo({
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
            response.status(200).redirect('/success');
        }, (err) => {
            response.status(400).send(err);
    });
});

// app.post('/distrib-data', upload.array('file', 2), (request, response) => {
app.post('/distrib-data', upload.single('proof'), (request, response) => {    
    let distribInfo = new DistribInfo({
        distribCode: request.body.distribCode,
        firmName: request.body.firmName,
        ownerName: request.body.ownerName,
        experience: request.body.experience,
        annualTurnover: request.body.annualTurnover,
        contact: request.body.contact,
        firmAddress: request.body.firmAddress,
        pin: request.body.pin,
        img: {
            // data: file.readFileSync(`${request.files.filename}`),
            data: file.readFileSync(`${request.file.filename}`),
            contentType: `${request.file.mimetype}`
        },
        img1: {
            data: file.readFileSync(`${request.file.filename}`),
            contentType: `${request.file.mimetype}`
        },
        date: new Date().toDateString()
    });

    DistribInfo.create(distribInfo, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            distribInfo.save().then(() => {
                response.status(200).redirect('/success');
            }, (err) => {
                response.status(400).send(err);
            });
        }
    });
});

app.post('/admin-data', (request, response) => {
    let adminInfo = new AdminInfo({
        empCode: request.body.empCode,
        adminName: request.body.adminName,
        userId: request.body.userId,
        password: request.body.password,
        date: new Date().toDateString()
    });

    adminInfo.save().then(() => {
            response.status(200).redirect('/success');
        }, (err) => {
            response.status(400).send(err);
    });
});

app.post('/emp-data', (request, response) => {
    let empData = new EmployeeCode({
        employeeCode: request.body.employeeCode,
        employeeName: request.body.employeeName,
        zone: request.body.zone,
        date: new Date().toDateString()
    });

    empData.save().then(() => {
            response.status(200).redirect('/success');
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
    let orderInfo = new OrderInfo({
        empCode: request.body.empCode,
        distribCode: request.body.distribCode,
        outletCode: request.body.outletCode,
        productItem: request.body.productItem,
        quantity: request.body.quantity,
        date: new Date().toDateString()
    });

    orderInfo.save().then(() => {
            response.status(200).redirect('/success');
        }, (err) => {
            response.status(400).send(err);
    });
});

app.get('/distributor', (request, response) => {
     response.sendFile(__dirname + '/distributor.html');
});

app.post('/admin', (request, response) => {
    response.sendFile(__dirname + '/admin.html');
});

app.get('/empCodes', (request, response) => {
    EmployeeCode.find({}, {'employeeCode': 1}, (err, empCodes) => {
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

app.get('/outCode', (request, response) => {
    OutletCode.find({}, {'outletCode': 1}, (err, outletCodes) => {
        if (err) return console.error(err);
        response.status(200).send(outletCodes);
    });
});

app.get('/sales-info', (request, response) => {
    let dataMap = new Map();
    async function getDistinctProduct() {
        let distinctProducts = await OrderInfo.distinct("productItem");
        for (let product of distinctProducts) {
            let quantity = await getTotalQuantity(product);
            dataMap.set(product, quantity); 
        }   
        response.status(200).send(JSON.stringify([...dataMap]));
    }

    async function getTotalQuantity(distinctProduct) {
        let quantity = 0;
        let documents = await OrderInfo.find({productItem: `${distinctProduct}`});
        for (let document of documents) {
            let index = document.productItem.indexOf(`${distinctProduct}`);
            quantity = quantity + parseInt(document.quantity[index]);
        } 
        return quantity;
    }

    getDistinctProduct();
});

app.post('/product-detail', (request, response) => {
    let cost = [], name = request.body;
    async function getProductInfo() {
        for (const unit of name) {
            let info = await ProductInfo.find({name: `${unit}`});
            await getProductCost(info);
        }
        response.status(200).send(JSON.stringify([...cost]));
    }

    async function getProductCost(info) {
        cost.push(parseInt(info[0]['cost']));
        
    }

    getProductInfo();
});

app.post('/', (request, response) => {
    response.send(request.body);
});

app.post('/outlet-excel', upload.single('outletExcel'), (request, response) => {
    let excel = xlsx.readFile(`${request.file.filename}`);
    file.unlink(`${request.file.filename}`, (err) => {});
    let sheetName = excel.SheetNames[0];
    let sheet = excel.Sheets[`${sheetName}`];
    let json = xlsx.utils.sheet_to_json(sheet);
    for (let index = 0; index < json.length; index++) {
        let outletCode = json[index]['outletCode'];
        let object = new OutletCode({
            outletCode: outletCode
        });
        object.save().then(() => {
            
        }, (err) => {
            response.status(400).send(err);
        });    
    }
    response.status(200).redirect('/success');
})

app.get('/success', (request, response) => {
    response.sendFile(__dirname + '/success.html');
});

app.get('/failure', (request, response) => {
    response.sendFile(__dirname + '/failure.html');
});