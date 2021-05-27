import Plan from '../models/plan.js'

export const createPlan = async (req, res) => {
  const studentID = req.params.studentID;
  try {
    const newPlan = new Plan({ 
      studentID: studentID,
      periods: []
    });
    await newPlan.save();

    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}

export const getPlan = async (req, res) => {
  const filter = { studentID: req.params.studentID };
  try {
    const plan = await Plan.findOne(filter);

    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}

export const createPlanPeriod = async (req, res) => {
  const filter = { studentID: req.params.studentID };
  let period = req.body;
  period.taskID = req.params.taskID
  try {
    const plan = await Plan.findOne(filter)
    plan.periods.push(period)
    plan.save();
    
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}