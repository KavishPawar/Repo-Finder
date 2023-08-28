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




app.use( require("express").json() );

app.post("/", async (req,res) => {
    // res.status(200).json({ received: req.body });//gives response after getting a req. it stops the process and wont process the rest of the code.
    console.log(req.body);

    const finalUrl = req.body[0];
    let ripped = await fetch(finalUrl)//fetches and stored in the variable ripped.
    let rip = await ripped.json();//converts the REABABLESTREAM from the fetched varible(ripped) into a javascript object.
    console.log( rip );
    res.json(rip.items);//sends the items object from the rip variable to the frontend.(responses the rip.items to the request of the frontend.)
});
} )





