const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const employeeRoute = require("./routes/employee");

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/", employeeRoute);

mongoose
  .connect(
    "mongodb+srv://floges:FlogesDB@cluster0.qerrw.mongodb.net/hisham_employee_data?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected Successfully!"))
  .catch((err) => console.log(err));

app.listen(8000, () => console.log("Server running on port : 8000"));
