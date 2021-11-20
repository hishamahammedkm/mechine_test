const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  designation: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Employee", employeeSchema);
