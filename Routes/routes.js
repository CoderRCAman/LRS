const express = require('express');
const Router = express.Router();

Router.get('/', (req,res) => {
    res.render('login') ;
})

Router.get('/admin', (req,res) => {
    res.send('Home');
})
module.exports = Router;