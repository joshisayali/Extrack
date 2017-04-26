var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Expenses = require('../models/expenses');

var expenseRouter = express.Router();
expenseRouter.use(bodyParser.json());

expenseRouter.route('/')
.get(function(req,res,next){
    Expenses.find({}, function(err,expense){
        if(err) throw err;
        res.json(expense);
    });
})
.post(function(req,res,next){
    console.log('inside post')
    Expenses.create(req.body, function(err,expense){
        if(err) {
            console.log(err);
            //throw err;
        }
        else{
            console.log('expense created');
        }        
    });
})
.delete();

module.exports = expenseRouter;
