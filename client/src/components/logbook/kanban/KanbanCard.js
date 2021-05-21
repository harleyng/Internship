import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd'

import useStyles from './styles'

const KanbanCard = ({ index, cardID, text }) => {
  const classes = useStyles();
  return (
    <Draggable draggableId={String(cardID)} index={index}>
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  )
}

export default KanbanCard
