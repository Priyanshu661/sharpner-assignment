const Expense = require("../models/expenses");

const add_expense = async (req, res) => {
  try {
    const { amount, description, category } = req.body;

    const expense = new Expense({
      amount,
      description,
      category,
    });

    await expense.save();

    return res.status(200).json({ message: "Expense Saved" });
  } catch (e) {
    console.log(e);
  }
};

const get_expenses = async (req, res) => {
  try {
    const data = await Expense.findAll();

    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};

const delete_expense = async (req, res) => {
  try {
    const id = req.params.id;
    await Expense.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Expense Deleted" });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  add_expense,
  get_expenses,
  delete_expense,
};
