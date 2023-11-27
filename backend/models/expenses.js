const Sequelize=require("sequelize")

const sequelize=require("../database/db")

const Expense = sequelize.define("Expense", {
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Expense;