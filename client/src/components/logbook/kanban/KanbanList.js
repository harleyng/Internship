import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import useStyles from './styles'
import KanbanCard from './KanbanCard'
import KanbanActionButton from './KanbanActionButton'

const KanbanList = ({ index, listID, title, cards }) => {
  const classes = useStyles();
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div className={classes.listContainer} {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) =>(
                  <KanbanCard key={card.id} index={index} text={card.text} cardID={card.id}/>
                ))}
                {provided.placeholder}
                <KanbanActionButton listID={listID}/>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default KanbanList
