const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//express app
const app = express();

//middleware and static files...
app.use(express.static('./static'));
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));


//listen for requests
app.listen(3000);

//set view engine
app.set('view engine', 'ejs');

//show index
app.get('/', (req,res) => {
    res.render('index', { title: "Home Page"});
} )





