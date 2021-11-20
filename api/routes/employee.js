const router = require("express").Router();
const Employee = require("../models/Employee");

router.post("/employee", async (req, res) => {
  try {
    const newEmployee = new Employee({
      name: req.body.name,
      age: req.body.age,
      designation: req.body.designation,
      email: req.body.email,
    });

    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
