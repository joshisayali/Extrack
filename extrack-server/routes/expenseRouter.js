var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Expenses = require('../models/expenses');
var ExpensePayment = require('../models/expensePayments');
var ExpenseSubCategory = require('../models/expenseSubCategories');
var ExpenseRepeat = require('../models/expenseRepeats');


var expenseRouter = express.Router();
expenseRouter.use(bodyParser.json());

expenseRouter.route('/')
.get(function(req,res,next){    
    
   Expenses.find({})
    .populate('expensePayment')
    .populate('expenseSubCategory')  
    .populate('expenseRepeat')
    .exec(function(err,expenses){
        if(err) throw err;
        //console.log(expenses[0]);
        res.json(expenses);
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
