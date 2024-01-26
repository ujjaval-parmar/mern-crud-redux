const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://root:root@cluster0.e8mnupd.mongodb.net/CRUD?retryWrites=true&w=majority')
    .then(()=> console.log('DB connected!'))
    .catch(err=> console.log('Connection Failed! ' + err));

app.use('/', userRouter);


app.listen(4000, ()=>{
    console.log("Server running on: http://localhost:4000/")
});

