'use strict'

const req = require("express/lib/request")

module.exports=(req,res,next)=>{

    if(typeof req.query.name == 'string' && req.query.name !=""){
next();
}else{
    next(`${req.query.name} Name not valid`)
}
}