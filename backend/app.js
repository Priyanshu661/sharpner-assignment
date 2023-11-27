const express =require("express")
const bodyParser=require("body-parser")
const cors=require("cors")

const sequelize=require("./database/db.js")

const app=express()

app.use(cors())

app.use(express.json())

const expenseRoutes=require("./routers/expenses")

app.use("/expense",expenseRoutes)



sequelize
  .sync()
  .then((res) => {
    console.log("db connected");
    app.listen(3000, () => {
      console.log("server is running");
    });
  })
  .catch((e) => {
    console.log(e);
  });



