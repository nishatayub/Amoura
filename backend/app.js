const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/database');
const dotenv = require('dotenv').config();
const User = require('./models/user');
const { upload } = require('upload');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});

app.post('/uploads',(req,res)=>{
    console.log(req.file);
})