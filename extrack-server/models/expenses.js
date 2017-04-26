var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseCategorySchema = new Schema(
    {
        expenseCategoryName:{type: String, required:true},
        expenseCategoryDescription: {type: String},
        isInUse: {type: Boolean, default: true}
    },
    {
        timestamps:true
    }
);

var expenseSubCategorySchema = new Schema(
    {
        expenseCategory: expenseCategorySchema,
        expenseSubCategoryName:{type: String, required:true},
        expenseSubCategoryDescription: {type: String},
        isInUse: {type: Boolean, default: true}
    },
    {
        timestamps:true
    }
);

var expensePaymentSchema = new Schema(
    {
        expensePaymentMode:{type: String, required:true},
        expensePaymentModeDescription: {type: String},
        isInUse: {type: Boolean, default: true}        
    },
    {
        timestamps:true
    }
);

var expenseRepeatSchema = new Schema(
    {
        expenseRepeatFrequency:{type: String, required:true},
        expenseRepeatDescription: {type: String},
        isInUse: {type: Boolean, default: true}        
    },
    {
        timestamps:true
    }
);

var expenseSchema = new Schema(
    
    {
        expenseDate:{type:Date, required:true},
        expenseItem:{type:String, required:true},
        expenseAmount:{type:Number, required:true},
        expensePayment: {type:String, required:true},
        expenseSubCategory: {type:String, required:true},
        expenseRepeat:{type:String, required:true}
    },
    {
        timestamps:true
    }
);

var Expense = mongoose.model('Expense',expenseSchema);
module.exports = Expense;
