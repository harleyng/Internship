import React, { useState, useEffect, useCallback } from 'react';
import { DataGrid  } from '@material-ui/data-grid';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { defaultColumns } from './constants/dataProcessing';
import CustomToolbar from './CustomToolBar'
import RightMenu from './RightMenu';

const mouseInitialState = {
  mouseX: null,
  mouseY: null,
};

const StudentsDataGrid = ({ hide, role, staffToolBar }) => {
  const students = useSelector(state => state.students);
  const [selectedRow, setSelectedRow] = useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState(defaultColumns);
  const [mousePosition, setMousePosition] = useState(mouseInitialState);
  const [selectedCellParams, setSelectedCellParams] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    processData(hide);
  }, [students])

  // Data 
  let cols = defaultColumns;
  const processData = (hide) => {
    // Colums
    cols = cols.filter((column) => {
      let isVisible = true;
      hide.forEach(element => {
        if (column.field === element) {
          isVisible = false;
        } 
      });
      return isVisible
    })
    setColumns(cols)

    // Rows
    let newRows = [];
    students.forEach(student => {
      newRows.push({
        id: student.studentID,
        studentID: student.studentID,
        fullName: student.fullName,
        phoneNo: student.phoneNo,
        DOB: new Date(student.DOB).toLocaleDateString('en-GB'),
        academicYear: student.academicYear,
        department: student.department,
        supervisor_internal: student.supervisor.internal,
        supervisor_fullName: student.supervisor.fullName,
        supervisor_email: student.supervisor.email,
        supervisor_position: student.supervisor.position,
        supervisor_department: student.supervisor.department,
        supervisor_phoneNo: student.supervisor.phoneNo,
        supervisor_address: student.supervisor.address || 'x',
        supervisor_DOB: new Date(student.supervisor.DOB).toLocaleDateString('en-GB') || 'x',
        supervisor_PITCode: student.supervisor.PITCode || 'x',
        supervisor_personalID_No: student.supervisor?.personalID?.No || 'x',
        supervisor_personalID_givenDate: student.supervisor?.personalID?.givenDate || 'x',
        supervisor_personalID_givenPlace: student.supervisor?.personalID?.givenPlace || 'x',
        supervisor_bankAccount_bankName: student.supervisor?.bankAccount?.bankName || 'x',
        supervisor_bankAccount_No: student.supervisor?.bankAccount?.No || 'x',
        supervisor_bankAccount_branch: student.supervisor?.bankAccount?.branch || 'x',
        internship_topic: student.internship?.topic,
        internship_description: student.internship?.description, 
        internship_objective: student.internship?.objective,
        internship_outcome: student.internship?.outcome,
        internship_location: student.internship?.location,
        internship_host: student.internship?.host,
        internship_topicStatus: student.internship?.topicStatus,
        internship_updatedAt: student.internship?.updatedAt,
        comment: student.comment,
      })
    })
    setRows(newRows)
  }

  // Right Menu
  const openRightClickMenu = (event) => {
    event.preventDefault();
    setMousePosition({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };
  
  // Staff comment
  const handleCellClick = useCallback((params) => {
    setSelectedCellParams(params);
  }, []);

  const handleDoubleCellClick = useCallback((params, event) => {
    event.stopPropagation();
  }, []);

  // Prevent from rolling back on escape
  const handleCellKeyDown = useCallback((params, event) => {
    if (
      params.cellMode === 'edit' &&
      (event.key === 'Escape' || event.key === 'Delete' || event.key === 'Enter')
    ) {
      event.stopPropagation();
    }
  }, []);

  // Prevent from committing on blur
  const handleCellBlur = useCallback((params, event) => {
    if (params.cellMode === 'edit') {
      event?.stopPropagation();
    }
  }, []);
  return (
    !students.length ? <CircularProgress /> : (
      <div style={{ height: '90vh', width: '100%', cursor: 'context-menu' }} onContextMenu={openRightClickMenu}>
        <DataGrid 
          rows={rows} 
          columns={columns} 
          onCellClick={handleCellClick}
          onCellDoubleClick={handleDoubleCellClick}
          onCellBlur={handleCellBlur}
          onCellKeyDown={handleCellKeyDown}
          pageSize={5} 
          checkboxSelection
          components={{
            Toolbar: CustomToolbar
          }}
          componentsProps={{
            toolbar: {
              selectedCellParams,
              modalOpen,
              setModalOpen,
              staffToolBar
            },
          }}
          onSelectionModelChange={(e) => {
            setSelectedRow(e.selectionModel)
          }}/>
        <RightMenu selectedRow={selectedRow} rows={rows} role={role} mousePosition={mousePosition} setMousePosition={setMousePosition} mouseInitialState={mouseInitialState}/>
      </div>
    )
  )
}

export default StudentsDataGrid

