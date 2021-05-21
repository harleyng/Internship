import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import useStyles from './styles'
import KanbanList from './KanbanList'
import KanbanActionButton from './KanbanActionButton'
import { sort } from '../../../actions/kanban'

const Kanban = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lists = useSelector(state => state.kanbanList)

  const onDragEnd = (result) => {
    const { destination, source, draggableID, type } = result;
    console.log(source)
    if(!destination) {
      return;
    }
    dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableID,
      type
    ))
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {provided => (
          <div className={classes.kanbanContainer} {...provided.droppableProps} ref={provided.innerRef}>
            {lists.map((list, index) => (
              <KanbanList key={list.id} index={index} listID={list.id} title={list.title} cards={list.cards} />
            ))}
            {provided.placeholder}
            <KanbanActionButton list />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Kanban
