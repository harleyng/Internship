import React, { useState } from 'react'
import { GridToolbarContainer, GridDensitySelector, GridFilterToolbarButton, GridColumnsToolbarButton  } from '@material-ui/data-grid';
import { Button, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfile } from '../../../actions/student'
import CommentModal from './CommentModal';

const CustomToolbar = ({ selectedCellParams, modalOpen, setModalOpen, staffToolBar }) => {
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState([])
  const students = useSelector(state => state.students);
  const headerName = selectedCellParams?.colDef?.headerName;
  const studentID = selectedCellParams?.id;

  const handleOpenModal = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const handleCommentChange = (e) => {
    setCommentData([...students[selectedCellParams?.rowIndex].comment, `${headerName}: ${e.target.value}`])
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    
    if (Object.keys(commentData).length !== 0) {
      dispatch(updateProfile({comment: commentData, studentID: studentID}))
    }
    handleCloseModal();
  }
  return (
    <>
    <GridToolbarContainer>
      <GridColumnsToolbarButton style={{marginLeft: '10px'}}/>
      <GridFilterToolbarButton style={{margin: '5px 10px'}} />
      <GridDensitySelector/>
      {staffToolBar ? (
        <>
          <Divider orientation="vertical" flexItem style={{margin: '0 20px'}} />
          <Button
            onMouseDown={handleOpenModal}
            disabled={!selectedCellParams}>
            Comment
          </Button>
        </>
      ) : null}

    </GridToolbarContainer>
    <CommentModal handleCommentChange={handleCommentChange} handleCommentSubmit={handleCommentSubmit} handleCloseModal={handleCloseModal} modalOpen={modalOpen} studentID={studentID} headerName={headerName} />
    </>
  )
};

export default CustomToolbar
