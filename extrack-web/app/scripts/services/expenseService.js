'use strict';
angular.module('extrackWebApp')
.service('expenseFactory', function(){
    
     var expenses=[
        {
            expenseDate:'04/20/2017',
            expenseItem:'Safeway',
            expenseAmount:50,
            expensePayment: 'Credit',
            expenseSubCategory: 'Grocery',
            expenseRepeat: 'Weekly'
        },
        {
            expenseDate:'04/21/2017',
            expenseItem:'Macys',
            expenseAmount:100,
            expensePayment: 'Credit',
            expenseSubCategory: 'Shopping',
            expenseRepeat: 'Random'
        }
    ];
    
    this.getExpenses = function(){
        return expenses;
    };
    
    this.getExpense = function(index){
        return expenses[index];
    };
    
});