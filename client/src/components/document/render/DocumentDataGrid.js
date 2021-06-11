import React, { useState, useEffect, useCallback } from 'react'
import { CircularProgress } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from 'react-redux'

import { annex2, annex3_EN, annex4_EN, annex5_EN, annex6_EN } from '../../../setting/constants/document'
import RenderDocument from '../../../pages/document/staffHandle/RenderDocument'
import CustomToolBar from './CustomToolBar'

const DocumentDataGrid = () => {
  const [selectedRow, setSelectedRow] = useState([]);
  const [selectedCellParams, setSelectedCellParams] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const documentList  = useSelector(state => state.documents)

  useEffect(() => {
    console.log(documentList)
  }, [documentList])

  let columns = [
    { field: 'studentID', headerName: 'Student ID', width: 150 },
    { field: `${annex2}`, headerName: `${annex2}`, width: 300, renderCell: RenderDocument },
    { field: `${annex3_EN}`, headerName: `${annex3_EN}`, width: 300, renderCell: RenderDocument },
    { field: `${annex4_EN}`, headerName: `${annex4_EN}`, width: 300, renderCell: RenderDocument },
    { field: `${annex5_EN}`, headerName: `${annex5_EN}`, width: 300, renderCell: RenderDocument },
    { field: `${annex6_EN}`, headerName: `${annex6_EN}`, width: 300, renderCell: RenderDocument }
  ];
  let rows = [];
  if (documentList) {
    for (let i = 0; i < documentList.length; i++) {
      rows.push({
        id: documentList[i]._id,
        studentID: documentList[i].studentID,
      })
      for (let j = 0; j < documentList[i].documents.length; j++) {
        rows[i] = {...rows[i], [documentList[i].documents[j].name]: documentList[i].documents[j]}
      }
    }
  }

  const handleCellClick = useCallback((params) => {
    console.log(params)
    setSelectedCellParams(params);
  }, [])

  return (
    !rows.length ? <CircularProgress /> : (
      <div style={{ height: '90vh', width: '100%' }}>
        <DataGrid 
          rows={rows} 
          columns={columns} 
          rowHeight={350}
          checkboxSelection
          onCellClick={handleCellClick}
          components={{
            Toolbar: CustomToolBar
          }}
          componentsProps={{
            toolbar: {
              selectedCellParams,
              selectedRow,
              modalOpen,
              setModalOpen,
            },
          }}
          onSelectionModelChange={(e) => {
            setSelectedRow(e.selectionModel)
          }}/>
      </div>
    )
  )
}

export default DocumentDataGrid
