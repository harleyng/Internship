import Task from '../models/task.js'

export const createTask = async (req, res) => {
  const taskID = req.params.taskID;
  try {
    const newTask = new Task({ 
      _id: taskID,
      tables: []
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json(error); 
  }
}

export const getTask = async (req, res) => {
  const filter = { _id: req.params.taskID };
  try {
    const task = await Task.findOne(filter);
    
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}

export const createTaskList = async (req, res) => {
  const filter = {_id: req.params.taskID};
  // console.log(req.body)
  try {
    const task = await Task.findOne(filter)
    task.lists.push({
      title: req.body.title,
      cards: []
    })
    task.save();

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error); 
  }
}

export const createTaskCard = async (req, res) => {
  const filter = {_id: req.params.taskID};
  let oldCards = [];
  const newCard = {
    title: req.body.title
  }
  const task = await Task.findOne(filter)
  task.lists.map(list => {
      if (list._id == req.params.listID) {
        oldCards = list.cards
      }
    })
  const update = { $set: {'lists.$[element].cards': [...oldCards, newCard]} }
  try {
    const updatedTask = await Task.findOneAndUpdate(filter, update, {
      arrayFilters: [{'element._id': req.params.listID}],
      new: true
    });
    res.status(201).json(updatedTask);
  } catch (error) {
    res.status(500).json(error); 
  }
}

// export const updateDocument = async (req, res) => {
//   const filter = { _id: req.body.id };
//   const update = { $set: {'documents.$[element]': [req.body.document]} }
//   try {
//     await Document.findOneAndUpdate(filter, update, {
//       arrayFilters: [{'element.name': req.body.document.name}],
//       new: true,
//       upsert: true 
//     });
//     const documents = await Document.find();
//     res.json(documents);
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong." }); 
//   }
// }

// export const updateEvaluation = async (req, res) => {
//   const filter = { studentID: req.params.studentID };
//   const update = req.body;
//   try {
//     const updatedEvaluation = await CouncilEvaluation.findOneAndUpdate(filter, update, {
//       new: true,
//       upsert: true 
//     });
//     res.json(updatedEvaluation);
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong." }); 
//   }
// }