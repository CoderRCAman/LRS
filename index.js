const express = require('express');
const app = express(); //all properties of express will be inherited 
const PORT = 4500;
const Routes = require('./Routes/routes');
const mongoose = require('mongoose');
const path = require('path');
var expressLayouts = require('express-ejs-layouts');
//set ejs engine 
app.set('view engine', 'ejs');

// connect mongodb 
const DBUrl = 'mongodb+srv://Server:1234@cluster0.0ychj.mongodb.net/Server?retryWrites=true&w=majority'
//set up database 
//staic pages
app.use( express.static(path.join(__dirname, './Public')))
mongoose.connect(DBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database up and running');;
    }).catch(() => {
        console.log('Something went wrong');
    });
//Routes 
app.use('/', Routes);
app.listen(PORT, (req,res) => {
    console.log("Server is running");
})