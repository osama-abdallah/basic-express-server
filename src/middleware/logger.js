'use strict'

const req = require("express/lib/request")

module.exports = (req,res,next)=>{
    console.log(`request path: ${req.path}`)
    console.log(`request method: ${req.method}`)
next();
}