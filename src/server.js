'use strict'

const express = require("express");

const cors = require("cors");

const logger = require('./middleware/logger')

const validator = require("./middleware/validator")

const notFound = require('./error.handlers/404')

const errorHandler = require('./error.handlers/500')

const app = express();


app.use(express.json());
app.use(cors());

app.use(logger);

app.get('/',(req,res)=>{
    res.send('Home route')
})

app.get('/person',validator,(req,res)=>{
    res.status(200).json({name: req.query.name})
})




app.use(errorHandler);
app.use('*',notFound);

function start(port){

    app.listen(port,()=>{
        console.log(`Listening to port ${port}`)
    })
}

module.exports = {
    app:app,
    start:start
}