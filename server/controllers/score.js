import Score from '../models/score.js'
import Student from '../models/student.js'
import User from '../models/user.js'
import CouncilEvaluation from '../models/councilEvaluation.js'
import { sendEmail } from '../mailing/sendEmail.js'

export const getEvaluation = async (req, res) => {
  const filter = { studentID: req.params.studentID };
  const newEvaluation = {
    defense: {
      overallDecision: 1,
      totalScore: 0
    }, 
    report: {
      ratings: 1,
      totalScore: 0
    }}
  try {
    const evaluation = await CouncilEvaluation.findOne(filter);
    const totalScore = await Score.findOne(filter)

    if (evaluation) {
      let addScoreEvaluation = {...evaluation}._doc;

      addScoreEvaluation.defense.totalScore = totalScore.presentation
      addScoreEvaluation.report.totalScore = totalScore.report 
      console.log(addScoreEvaluation)
      console.log(totalScore)
      res.status(201).json(addScoreEvaluation);
    }
    res.status(201).json(newEvaluation); 
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong." });
  }
}

export const updateEvaluation = async (req, res) => {
  const filter = { studentID: req.params.studentID };
  const update = req.body;
  try {
    const updatedEvaluation = await CouncilEvaluation.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true 
    });
    res.json(updatedEvaluation);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}

export const getScores = async (req, res) => {
  try { 
    const scores = await Score.find();

    res.status(200).json(scores)
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}

export const getScore = async (req, res) => {
  const studentID = req.params.studentID
  try {
    const score = await Score.find({studentID: studentID});

    res.status(200).json(score)
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}

export const getSupervisorScores = async (req, res) => {
  const studentFilter = {'supervisor.email': req.body.email}
  try {
    const students = await Student.find(studentFilter)
    const studentIDs = students.map(student => student.studentID)

    const scoreFilter = {studentID: studentIDs}
    const scores = await Score.find(scoreFilter);
    
    res.status(200).json(scores);
  } catch (error) {
    res.status(404).json({ message: error.message })
  } 
}

export const createScore = async (req, res) => {
  const studentID = req.params.studentID;
  try {
    const newScore = new Score({ 
      studentID: studentID,
      supervisor: 0,
      presentation: 0,
      report: 0
    });
    await newScore.save();

    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}

export const updateScore = async (req, res) => {
  const filter = { studentID: req.params.studentID };
  const update = req.body;
  try {
    const updatedScore = await Score.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true 
    });
    
    const evaluatedStudent = await Student.findOne(filter)
    const evaluatedUser = await User.findOne({_id: evaluatedStudent.userID})
    const receiver = evaluatedUser.email;
    const title = "Your supervisor has evaluated your internship process"
    const context = {content: `You get ${req.body.supervisor}/20 score.`}
    sendEmail(receiver, title, context);

    res.json(updatedScore);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}