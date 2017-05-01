'use strict';
angular.module('extrackWebApp')
.controller('ExpenseController', ['$scope','expenseFactory', function($scope, expenseFactory){
    $scope.message = 'this is expense controller';
    $scope.newExpense = {expenseDate:'',expenseItem:'',expenseAmount:'',expensePayment:'',expenseSubCategory:'',expenseRepeat:''};
    
    $scope.expenses = expenseFactory.getExpenses().query(
        function(response){
            $scope.expenses = response;
        
        },function(error){
            console.log('Error: '+error);
        }
    );
    
    $scope.expenseCategories = expenseFactory.getExpenseCategories().query(
        function(response){
            $scope.expenseCategories = response;
        },function(error){
            console.log('Error: '+error);
        });
    
    $scope.expenseSubCategories = expenseFactory.getExpenseSubCategories().query(
        function(response){
            $scope.expenseSubCategories = response;
        },function(error){
            console.log('Error: '+error);
        });
    
    $scope.expensePayments = expenseFactory.getExpensePayments().query(
        function(response){
            $scope.expensePayments = response;
        },function(error){
            console.log('Error: '+error);
        });
    
    $scope.expenseRepeats = expenseFactory.getExpenseRepeats().query(
        function(response){
            $scope.expenseRepeats = response;
        },function(error){
            console.log('Error: '+error);
        });
    
    $scope.createExpense = function(){
        
        console.log($scope.newExpense);
        expenseFactory.getExpenses().create($scope.newExpense);
        $scope.newExpense = {expenseDate:'',expenseItem:'',expenseAmount:'',expensePayment:'',expenseSubCategory:'',expenseRepeat:''};
        $scope.createExpenseForm.$setPristine();
    };
    
    //display total amount
    $scope.total = 0;
    for(var i=0; i < $scope.expenses.length; i++)
        {
            $scope.total += $scope.expenses[i].expenseAmount;
        }
}]);
            
            
    
