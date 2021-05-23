import React from 'react'
import { Menu, MenuItem } from '@material-ui/core';


const RightMenu = ({ studentID, mousePosition, setMousePosition, mouseInitialState, handleOpenModal }) => {
  const role = JSON.parse(localStorage.getItem('profile'))?.result?.role;

  const handleClose = () => {
    setMousePosition(mouseInitialState);
  };

  const handleCouncilEvaluation = () => {
    window.open(`/student/${studentID}/council-evaluate`)
    handleClose()
  }

  const handleSupervisorEvaluation = () => {
    handleOpenModal();
    handleClose();
  }

  return (
    <Menu
      keepMounted
      open={mousePosition.mouseY !== null}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        mousePosition.mouseY !== null && mousePosition.mouseX !== null
          ? { top: mousePosition.mouseY, left: mousePosition.mouseX }
          : undefined
      }
    >
      { role === 'council' ? 
        <>
          <MenuItem onClick={handleCouncilEvaluation}>Evaluate Student</MenuItem>
        </>
        : 
        <>
          <MenuItem onClick={handleSupervisorEvaluation}>Evaluate Student</MenuItem>
        </>
      }
    </Menu>     
  )
}

export default RightMenu
