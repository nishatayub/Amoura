const express = require('express');
const app =express();
const Port = 3000;

const connectDB = require('./config/db');


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

