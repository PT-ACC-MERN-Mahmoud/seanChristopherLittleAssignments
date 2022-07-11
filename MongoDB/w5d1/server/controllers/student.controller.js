const Student = require("../models/student.model");

const createStudent = (req, res) => {
  Student.create(req.body)
    .then((newStudent) => {
      res.status(201).json(newStudent);
    })
    .catch((err) => console.log("ERROR IN CREATE", err));
};

const getStudents = (req, res) => {
  Student.find({})
    .then((newStudent) => {
      res.status(201).json(newStudent);
    })
    .catch((err) => console.log("ERROR IN CREATE", err));
};

const getStudentById = (req, res) => {
  Student.findById(req.params.id)
    .then((newStudent) => {
      res.status(201).json(newStudent);
    })
    .catch((err) => console.log("ERROR IN CREATE", err));
};
module.exports = {
  createStudent,
  getStudents,
  getStudentById,
};
