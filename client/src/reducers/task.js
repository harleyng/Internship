import { CREATE_TASK_CARD, UPDATE_TASK_CARD, DELETE_TASK_CARD, CREATE_TASK_LIST, GET_TASK, DRAG_HAPPENED } from "../constants/actionTypes";

const task = (task = {}, action) => {
  switch (action.type) {
    case GET_TASK:
      return action.payload
    case CREATE_TASK_LIST:
      return action.payload
    case CREATE_TASK_CARD:
      return action.payload
    case UPDATE_TASK_CARD:
      return action.payload
    case DELETE_TASK_CARD:
      return action.payload
    case DRAG_HAPPENED:
      const {  
        droppableIDStart,
        droppableIDEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type
        } = action.payload;
      const newTask = {...task};
      const lists = newTask.lists
      console.log(newTask)

      //  dragging lists around
      if (type === 'list') {
        const list = lists.splice(droppableIndexStart, 1);
        lists.splice(droppableIndexEnd, 0, ...list);
        return newTask;
      } else {
        // In the same list
        if (droppableIDStart === droppableIDEnd) {
          const list = lists.find(list => droppableIDStart === list._id);
          console.log(list)
          const card = list.cards.splice(droppableIndexStart, 1);
          list.cards.splice(droppableIndexEnd, 0, ...card)
        }

        // Other list
        if(droppableIDStart !== droppableIDEnd) {
          // find the list where drag happened
          const listStart = lists.find(list => droppableIDStart === list._id)

          // pull out the card from this list
          const card = listStart.cards.splice(droppableIndexStart, 1);

          // find the list where the drag ended
          const listEnd = lists.find(list => droppableIDEnd === list._id);

          // put the card in the new list
          listEnd.cards.splice(droppableIndexEnd, 0, ...card)
        }

        return newTask;
      }
    default:
      return task; 
  }
}

export default task;