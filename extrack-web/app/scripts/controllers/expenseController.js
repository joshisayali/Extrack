'use strict';
angular.module('extrackWebApp')
.controller('ExpenseController', ['$scope','expenseFactory', function($scope, expenseFactory){
    $scope.message = 'this is expense controller';
      
    $scope.expenses = expenseFactory.getExpenses().query(
        function(response){
            $scope.expenses = response;
        
        },function(error){
            console.log('Error: '+error);
        }
    );
    //display total amount
    $scope.total = 0;
    for(var i=0; i < $scope.expenses.length; i++)
        {
            $scope.total += $scope.expenses[i].expenseAmount;
        }
}]);
            
            
    
