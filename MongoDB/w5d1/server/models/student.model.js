const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    //id is auto created
    name: String,
    email: String,
    age: Number,
    currentStack: String,
    isActive: Boolean,
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
