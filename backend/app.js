const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
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
app.post('/Signup', async(req,res) => {
    const {username, email, password } = req.body;
    try{
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: "User alrady exists" })
        }
         
        const salt = bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();

    }catch(err){
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});

app.post('/uploads',(req,res)=>{
    console.log(req.file);
})