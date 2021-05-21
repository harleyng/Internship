import React, {useState} from 'react'
import { Button, Card, Icon, TextareaAutosize } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import useStyles from './styles'
import { addList, addCard } from '../../../actions/kanban'

const KanbanActionButton = ({ listID, list }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState(false)
  const [text, setText] = useState('')

  const handleAdd = () => {
    if (text) {
      setText('')
      if (list) {
        dispatch(addList(text))
      } else {
        dispatch(addCard(listID, text))
      }
    }
    return;
  }

  const renderAddButton = () => {
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div 
        className={classes.openFormButtonGroup}
        style={{
          opacity: buttonTextOpacity, 
          color: buttonTextColor, 
          backgroundColor: buttonTextBackground
        }}
        onClick={openForm}
        >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }

  const renderForm = () => {
    const placeholder = list ? "Enter list title..." : "Enter a title for this card...";
    const buttonTitle = list ? "Add List" : "Add Card"
    return (
      <div>
        <Card className={classes.newCardContainer}>
          <TextareaAutosize 
            className={classes.newCardTextArea}
            placeholder={placeholder} 
            autoFocus 
            onBlur={closeForm} 
            value={text}
            onChange={handleInputChange} 
          />
        </Card>
        <div className={classes.newCardButtonGroup}>
          <Button onMouseDown={handleAdd} variant='contained' className={classes.newCardSubmitButton}>{buttonTitle}</Button>
          <Icon className={classes.newCardCloseButton}>close</Icon>
        </div>
      </div>
    )
  }

  const openForm = () => {
    setFormOpen(true);
  }
  const closeForm = () => {
    setFormOpen(false);
  }

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      {formOpen ? renderForm() : renderAddButton()}
    </div>
  )
}

export default KanbanActionButton
