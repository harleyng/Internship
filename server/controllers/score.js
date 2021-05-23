import Score from '../models/score.js'

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
    const newScore = new Score({ studentID: studentID});
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