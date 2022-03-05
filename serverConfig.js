const express = require('express'),
        bodyParser = require('body-parser'),
            multer  = require('multer'),
                xlsx = require('xlsx'),
                    path = require('path'),
                        file = require('fs');
                        

                

const port = 3005;

const app = express();

const storage = multer.diskStorage({
    destination: '.',
    filename: function (request, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
    fileFilter: function(request, file, cb) {
        checkFileType(file, cb);
    }
});

function checkFileType(file, cb) {
    const fileTypes = /jpeg|jpg|png/;
    const extnames = fileTypes.test(path.extname(file.originalname));
    const mimetype = fileTypes.test(file.mimeType);

    if(extnames && mimetype){
        return cb(null, true);
    } else {
        cb("Error : Upload Only Image Type Files!!");
    }
}

const upload = multer({
    storage: storage
});

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`Server up on port: ${port}`);
});

module.exports = {
    app,
    upload,
    xlsx,
    file
}