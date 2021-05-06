import Student from '../models/student.js'

export const getStudentList = async (req, res) => {
  try {
    const studentList = await Student.find();

    res.status(200).json(studentList);
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
  const studentID = req.body.studentID;
  const userID = req.body.userID;
  try {
    if (userID || studentID) {
      const existingStudent = await Student.findOne({ userID }) || await Student.findOne({ studentID });

      res.status(201).json(existingStudent);
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong." });
  }
}

export const updateProfile = async (req, res) => {
  const update = req.body
  const filter = { studentID: req.body.studentID };

  try {
    const updatedProfile = await Student.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true 
    });

    res.json(updatedProfile);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong." });
  }
}


