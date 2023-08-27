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
    // console.log( req.body[1] ); // <== Receives: [ arr ]
    // console.log( req.body[2] ); // <== Receives: [ arr ]
    res.status(200).json({ received: req.body });

    // const apiUrl = req.body[0];
    // const lang = req.body[1];
    // const star = req.body[2];

    const finalUrl = req.body[0] + req.body[1] + req.body[2];
    let ripped = await fetch(finalUrl)
     let rip = await ripped.json();
     console.log( rip );
    //  res.end();
     res.json(rip.items)


    // res.send('index') // Send back a confirmation JSON response
});
} )





