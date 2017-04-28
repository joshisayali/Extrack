'use strict';
angular.module('extrackWebApp')
.constant('baseURL','http://localhost:3000/')
.service('expenseFactory',['$resource','baseURL',function($resource,baseURL){
    
     this.getExpenses = function(){
        return $resource(baseURL+'expenses');   
    };  
    
    
}]);