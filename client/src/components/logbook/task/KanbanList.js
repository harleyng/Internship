import React, { useEffect } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import useStyles from './styles'
import KanbanCard from './KanbanCard'
import KanbanActionButton from './KanbanActionButton'

const KanbanList = ({ index, listID, title, cards, taskID }) => {
  const classes = useStyles();

  useEffect(() => {
    
  }, [cards])
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div className={classes.listContainer} {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) =>(
                  <KanbanCard key={card.id} index={index} title={card.title} cardID={card.id}/>
                ))}
                {provided.placeholder}
                <KanbanActionButton listID={listID} taskID={taskID} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default KanbanList
