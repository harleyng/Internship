import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import useStyles from './styles'
import KanbanList from './KanbanList'
import KanbanActionButton from './KanbanActionButton'
import { sort } from '../../../actions/task'

const Kanban = ({taskID, page}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const task = useSelector(state => state.task)
  const lists = task.lists

  useEffect(() => { 
    // console.log(taskID)
    // console.log(task)
    // console.log(lists)
  }, [task, page])

  const onDragEnd = (result) => {
    const { destination, source, type } = result;
    // console.log(source)
    // console.log(destination)
    if(!destination) {
      return;
    }
    dispatch(sort({
      taskID: taskID,
      droppableIDStart: source.droppableId,
      droppableIDEnd: destination.droppableId,
      droppableIndexStart: source.index,
      droppableIndexEnd: destination.index,
      type: type
    }))
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {provided => (
            <div className={classes.kanbanContainer} {...provided.droppableProps} ref={provided.innerRef}>
              {lists?.length ? (
                <>
                  {lists.map((list, index) => (
                    <KanbanList key={list._id} index={index} listID={list._id} title={list.title} cards={list.cards} taskID={taskID} />
                  ))}
                </>
              ) : null}
              {provided.placeholder}
              <KanbanActionButton list taskID={taskID}/>
            </div>
        )}
      </Droppable>
    </DragDropContext> 
  )
}

export default Kanban
