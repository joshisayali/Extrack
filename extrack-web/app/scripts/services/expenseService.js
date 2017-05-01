'use strict';
angular.module('extrackWebApp')
.constant('baseURL','http://localhost:3000/')
.service('expenseFactory',['$resource','baseURL',function($resource,baseURL){
    
    this.getExpenses = function(){
        return $resource(baseURL+'expenses',null,{create:{method:'POST'}});   
    };  
    
    this.getExpenseCategories = function(){
        return $resource(baseURL+'expensecategories');
    };
    
    this.getExpenseSubCategories = function(){
        return $resource(baseURL+'expensesubcategories');
    };
    
    this.getExpensePayments = function(){
        return $resource(baseURL+'expensepayments');
    };
    
    this.getExpenseRepeats = function(){
        return $resource(baseURL+'expenserepeats');
    };
    
    
}]);