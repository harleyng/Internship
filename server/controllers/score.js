import Score from '../models/score.js'
import CouncilEvaluation from '../models/councilEvaluation.js'

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
    res.json(updatedScore);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}