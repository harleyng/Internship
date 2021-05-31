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

export const updateTaskCard = async (req, res) => {
  const filter = {_id: req.params.taskID};
  let newCards
  const task = await Task.findOne(filter)
  task.lists.map(list => {
    if (list._id == req.params.listID) {
      newCards = list.cards.map(card => {
        if (card._id == req.body._id) {
          return req.body
        } else return card
      })
    }
  })
  const update = { $set: {'lists.$[element].cards': newCards} }
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

export const deleteTaskCard = async (req, res) => {
  const filter = {_id: req.params.taskID};
  let newCards;
  
  const task = await Task.findOne(filter)
  task.lists.map(list => {
    if (list._id == req.params.listID) {
      newCards = list.cards.filter(card => card._id != req.body._id)
    }
    console.log(newCards)
  })
  const update = { $set: {'lists.$[element].cards': newCards} }
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

export const sort = async (req, res) => {
  const {     
    taskID,
    droppableIDStart,
    droppableIDEnd,
    droppableIndexStart,
    droppableIndexEnd,
    type } = req.body
    // console.log(req.body)

  const filter = {_id: taskID}
  const task = await Task.findOne(filter)
  try {
    //  dragging lists around
    if (type === 'list') {
      const list = task.lists.splice(droppableIndexStart, 1);
      task.lists.splice(droppableIndexEnd, 0, ...list);
      res.status(201).json(task);
    } else{
      // In the same list
      if (droppableIDStart === droppableIDEnd) {
        const list = task.lists.find(list => droppableIDStart == list._id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }
      
      // Other list
      if(droppableIDStart !== droppableIDEnd) {
        // find the list where drag happened
        const listStart = task.lists.find(list => droppableIDStart == list._id)

        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // find the list where the drag ended
        const listEnd = task.lists.find(list => droppableIDEnd == list._id);

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }

      const updatedTask = await Task.findOneAndUpdate(filter, task, {
        new: true
      });

      res.status(201).json(updatedTask);
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error); 
  }
}
