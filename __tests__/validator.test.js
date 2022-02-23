'use strict'

const validator = require("../src/middleware/validator")

describe('testing validator middleware',()=>{

    let consoleSpy;
    let req = {query:{name:'osama'}};
    let res = {};
    let next = jest.fn();

    it('test next',()=>{
        validator(req,res,next);
        expect(next).toHaveBeenCalled();
    });
})