const express=require("express");
const { add_expense, get_expenses, delete_expense } = require("../controllers/expenses");

const router=express.Router();


router.post("/add-expense",add_expense)
router.get("/get-expenses", get_expenses);
router.delete("/delete-expense/:id", delete_expense);




module.exports=router