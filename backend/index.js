const express = require('express');
const app =express();
const Port = 3000;
const multer = require("./utils/multer");
const userController = require('./controllers/userController');
const userModel = require('./models/userModel');
const connectDB = require('./config/db');

app.use(express.json());   
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(Port, async() => {
    try{
        await connectDB();
        console.log(`Server is running on ${Port}`);
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }  
});

app.post('/upload', upload.single("file"), (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            return res.status(400).send({ message: 'Error uploading file.' });
        }
        res.send({ message: 'File uploaded successfully.' });
    });
});