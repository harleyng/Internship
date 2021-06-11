import Student from '../models/student.js'
import User from '../models/user.js'
import { sendEmail } from '../mailing/sendEmail.js'

export const getStudentUser = async (req, res) => {
  const { id } = req.params
  try {
    const studentUser = await User.findOne({ id });

    res.status(200).json(studentUser);
  } catch (error) {
    res.status(404).json({ message: error.message })
  } 
}

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message })
  } 
}

export const getSupervisorStudents = async (req, res) => {
  const filter = {'supervisor.email': req.body.email}
  
  try {
    const students = await Student.find(filter);

    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message })
  } 
}

export const createStudent = async (req, res) => {
  const studentID = req.body.studentID;
  const userID = req.body.userID;
  try {
    if (!studentID) return res.status(406).json({ message: "Please fill in the Student ID." });

    const existingStudent = await Student.findOne({ studentID });

    if (existingStudent) return res.status(406).json({ message: "This student ID is already registered" });

    const existingUser = await Student.findOne({ userID });

    if (existingUser) return res.status(406).json({ message: "You have already registered" });

    const newStudent = new Student({userID: userID, studentID: studentID, supervisor: {internal: true}})
    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong." });
  }
}

export const getProfile = async (req, res) => {
  const filter = req.body;
  try {
    if (filter) {
      const existingStudent = await Student.findOne(filter);
      res.status(201).json(existingStudent);
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong." });
  }
}

export const updateProfile = async (req, res) => {
  const update = req.body;
  const filter = { studentID: req.body.studentID };
  console.log(req.body)
  try {
    const updatedProfile = await Student.findOneAndUpdate(filter, update, {
      new: true,
    });

    const evaluatedStudent = await Student.findOne(filter)
    const evaluatedUser = await User.findOne({_id: evaluatedStudent.userID})
    const receiver = evaluatedUser.email;
    if (req.body.internship?.topicStatus && req.body.internship?.topicStatus !== 'Pending') {
      const title = "Your topic has been reviewed"
      const context = {content: `You are ${req.body.internship.topicStatus}.`}
      sendEmail(receiver, title, context);
    }
    if (req.body.comment) {
      const title = "There are some problem with your internship information"
      const context = {content: `${req.body.comment[req.body.comment.length - 1]}`}
      sendEmail(receiver, title, context);
    }

    res.json(updatedProfile);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong." });
  }
}


