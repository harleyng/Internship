import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbarContainer, GridDensitySelector, GridFilterToolbarButton  } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, CircularProgress, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfile } from '../../actions/student'
import { yellow, red, green } from '../../constants/colors'

const mouseInitialState = {
  mouseX: null,
  mouseY: null,
};

const useStyles = makeStyles((theme) => ({
  status: {
    padding: '5px 15px',
    border: '2px solid',
    borderRadius: '20px',
  },
  pendingStatus: {
    color: yellow,
    borderColor: yellow,
  },
  approvedStatus: {
    color: green,
    borderColor: green,
  }, 
  refusedStatus: {
    color: red,
    borderColor: red,
  },
}))

const StudentsDataGrid = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const students = useSelector(state => state.students)
  const [mousePosition, setMousePosition] = useState(mouseInitialState);
  const [selectedRow, setSelectedRow] = useState([]);
  const hide = [''];
 
  useEffect(() => {
    processData();
  }, [students])

  const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridFilterToolbarButton style={{margin: '5px 10px'}} />
      <GridDensitySelector/>
    </GridToolbarContainer>
  );

  let columns = [
    { field: 'studentID', headerName: 'Student ID', width: 130 },
    { field: 'topic', headerName: 'Topic', flex: 1 },
    { field: 'topicStatus', headerName: 'Topic Status', flex: 0.3, 
      renderCell: (params) => { 
        if (params.value === 'Pending') {
          return (
            <Typography className={`${classes.pendingStatus} ${classes.status}`}>
              {params.value}
            </Typography> 
          )
        }
        if (params.value === 'Approved') {
          return (
            <Typography className={`${classes.approvedStatus} ${classes.status}`}>
              {params.value}
            </Typography> 
          )
        }
        if (params.value === 'Refused') {
          return (
            <Typography className={`${classes.refusedStatus} ${classes.status}`}>
              {params.value}
            </Typography> 
          )
        }
      },
    },
  ];
  let rows = []
  
  const processData = () => {
    // Colums
    columns = columns.filter((column) => {
      let isVisible = true;
      hide.forEach(element => {
        if (column.field === element) {
          isVisible = false;
        } 
      });
      return isVisible
    })

    // Rows
    students.forEach(student => {
      if (student.internship?.topic) {
        rows.push({
          id: student._id,
          studentID: student.studentID,
          topic: student.internship.topic,
          topicStatus: student.internship.topicStatus,
        })
      }
    })
  }

  const PendingStatusFilter = {
    items: [{ columnField: 'topicStatus', operatorValue: 'contains', value: 'Pending' }],
  };

  const handleClick = (event) => {
    event.preventDefault();
    setMousePosition({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setMousePosition(mouseInitialState);
  };

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

  processData();

  return (
    !students.length ? <CircularProgress /> : (
      <div style={{ height: 400, width: '100%', cursor: 'context-menu' }} onContextMenu={handleClick}>
        <DataGrid 
          rows={rows} 
          columns={columns} 
          pageSize={5} 
          checkboxSelection 
          filterModel={PendingStatusFilter}
          components={{
            Toolbar: CustomToolbar,
          }}
          onSelectionModelChange={(e) => {
            setSelectedRow(e.selectionModel)
          }}/>
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
          <MenuItem onClick={handleApprove}>Approve</MenuItem>
          <MenuItem onClick={handleRefuse}>Refuse</MenuItem>
        </Menu>     
      </div>
    )
  )
}

export default StudentsDataGrid

