import React, { useState } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd'

import useStyles from './styles'
import CardDetail from './CardDetail';

const KanbanCard = ({ index, studentID, taskID, listID, cardID, cardData }) => {
  const classes = useStyles();
  const [showTaskDetail, setShowTaskDetail] = useState(false)

  const handleShowTaskDetail = () => {
    setShowTaskDetail(true)
  }
  const handleCloseTaskDetail = () => {
    setShowTaskDetail(false)
  }



  return (
    <Draggable draggableId={String(cardID)} index={index}>
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card className={classes.cardContainer} onClick={handleShowTaskDetail}>
            <CardContent>
              <Typography gutterBottom>{cardData.title}</Typography>
            </CardContent> 
          </Card>
          {showTaskDetail && (
            <CardDetail 
              showTaskDetail={showTaskDetail}
              handleCloseTaskDetail={handleCloseTaskDetail} 
              cardData={cardData}
              studentID = {studentID}
              taskID={taskID}
              listID={listID}
            />
          )}
        </div>
      )}
    </Draggable>
  )
}

export default KanbanCard
