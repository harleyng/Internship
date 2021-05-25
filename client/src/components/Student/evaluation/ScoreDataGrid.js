import React, { useState, useEffect, useCallback } from 'react'
import { CircularProgress } from "@material-ui/core";
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { updateScore } from '../../../actions/score'

import SupervisorEvaluationModal from './SupervisorEvaluationModal'
import RightMenu from './RightMenu'

const mouseInitialState = {
  mouseX: null,
  mouseY: null,
};

const ScoreDataGrid = () => {
  const dispatch = useDispatch()
  const [selectedCellParams, setSelectedCellParams] = useState(null);  
  const [mousePosition, setMousePosition] = useState(mouseInitialState);
  const [modalOpen, setModalOpen] = useState(false);
  const [supervisorScore, setSupervisorScore] = useState(0)
  const score = useSelector(state => state.studentScore)
  let rows = [];

  useEffect(() => {
    // console.log(rows)
  }, [score])

  let columns = [
    { field: 'studentID', headerName: 'Student ID', width: 150 },
    { field: 'supervisor', headerName: 'Supervisor', width: 150 },
    { field: 'report', headerName: 'Report', width: 150 },
    { field: 'presentation', headerName: 'Presentation', width: 150 },
    { field: 'total', headerName: 'Total result', width: 150 },
    { field: 'final', headerName: 'Final result', width: 150 }
  ];

  if (score) {
    for (let i = 0; i < score.length; i++) {
      const total = score[i].supervisor + score[i].report + score[i].presentation;
      rows.push({
        id: score[i]._id,
        studentID: score[i].studentID,
        supervisor: score[i].supervisor,
        report: score[i].report,
        presentation: score[i].presentation,
        total: total || 'Evaluating...',
        final: Math.round(total/3 * 10) /10 || 'Evaluating...'
      })
    }
  }

  // Right Menu
  const openRightClickMenu = (event) => {
    if (selectedCellParams) {
      event.preventDefault();
      setMousePosition({
        mouseX: event.clientX - 2,
        mouseY: event.clientY - 4,
      });
    }
  };
  
  const handleCellClick = useCallback((params) => {
    setSelectedCellParams(params);
  }, [])

  // Supervisor Modal
  // Comment on Info
  const handleOpenModal = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const handleSupervisorChange = (e) => {
    setSupervisorScore(e.target.value)
  }

  const handleSupervisorSubmit = (e) => {
    e.preventDefault();
    dispatch(updateScore(selectedCellParams.row.studentID, {supervisor: supervisorScore}))
    handleCloseModal();
  }
  return (
    !rows.length ? <CircularProgress /> : (
      <div style={{ height: '90vh', width: '100%', cursor: 'context-menu' }} onContextMenu={openRightClickMenu}>
        <DataGrid 
          rows={rows} 
          columns={columns}
          checkboxSelection 
          onCellClick={handleCellClick}
          components={{
            Toolbar: GridToolbar,
          }}
          />
          <RightMenu  mousePosition={mousePosition} setMousePosition={setMousePosition} mouseInitialState={mouseInitialState} handleOpenModal={handleOpenModal} studentID={selectedCellParams?.row?.studentID} />
          <SupervisorEvaluationModal handleSupervisorChange={handleSupervisorChange} handleSupervisorSubmit={handleSupervisorSubmit} handleCloseModal={handleCloseModal} modalOpen={modalOpen} studentID={selectedCellParams?.row?.studentID} />
      </div>
    )
  )
}

export default ScoreDataGrid
