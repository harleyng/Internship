import React, { useState } from 'react'
import { Menu, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { updateProfile } from '../../../actions/student'

const RightMenu = ({ selectedRow, rows, role, mousePosition, setMousePosition, mouseInitialState }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setMousePosition(mouseInitialState);
  };

  // Lecturer Topic Review
  const handleApprove = () => {
    selectedRow.forEach(selectedEl => {
      rows.forEach(rowEl => {
        if (rowEl.id === selectedEl) {
          dispatch(updateProfile({studentID: rowEl.studentID, internship: {topic: rowEl.topic, topicStatus: 'Approved'}}))
        }
      })
    })
    handleClose();
    document.location.reload();
  }

  const handleRefuse = () => {
    selectedRow.forEach(selectedEl => {
      rows.forEach(rowEl => {
        if (rowEl.id === selectedEl) {
          dispatch(updateProfile({studentID: rowEl.studentID, internship: {topic: rowEl.topic, topicStatus: 'Refused'}}))
        }
      })
    })
    handleClose();
    document.location.reload();
  }

  // Staff View Student Profile
  const handleOpenProfile = () => {
    selectedRow.forEach(selectedEl => {
      window.open(`/student/${selectedEl}`)
    })
    handleClose();
  }

  // Council Evaluate Student
  const handleEvaluateStudent = () => {
    if (role === 'council') {
      selectedRow.forEach(selectedEl => {
        window.open(`/student/evaluate/council/${selectedEl}`)
      })
    } else {
      selectedRow.forEach(selectedEl => {
        window.open(`/student/evaluate/supervisor/${selectedEl}`)
      }) 
    }

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
      { role === 'lecturer' ? 
        <>
          <MenuItem onClick={handleApprove}>Approve</MenuItem>
          <MenuItem onClick={handleRefuse}>Refuse</MenuItem>
        </>
       : [(
        role === 'staff' ? 
          <>
            <MenuItem onClick={handleOpenProfile}>Open Profile</MenuItem>
          </>
         : 
          <>
            <MenuItem onClick={handleEvaluateStudent}>Evaluate Student</MenuItem>
          </>
       )]
      }
    </Menu>     
  )
}

export default RightMenu
