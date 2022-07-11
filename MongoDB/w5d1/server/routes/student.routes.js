const studentController = require("../controllers/student.controller");

module.exports = (app) => {
  app.post("/api/students", studentController.createStudent);
  app.get("/api/students", studentController.getStudents);
  app.get("/api/students", studentController.getStudentById);
};
