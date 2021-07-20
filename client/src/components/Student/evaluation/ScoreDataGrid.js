import React, { useState, useEffect, useCallback } from 'react'
import { CircularProgress } from "@material-ui/core";
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { updateScore } from '../../../actions/score'

const ScoreDataGrid = () => {
  const dispatch = useDispatch()
  const [selectedCellParams, setSelectedCellParams] = useState(null);  
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
  
  const handleCellClick = useCallback((params) => {
    setSelectedCellParams(params);
  }, [])

  return (
    !rows.length ? <CircularProgress /> : (
      <div style={{ height: '90vh', width: '100%'}}>
        <DataGrid 
          rows={rows} 
          columns={columns}
          checkboxSelection 
          onCellClick={handleCellClick}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>
    )
  )
}

export default ScoreDataGrid
