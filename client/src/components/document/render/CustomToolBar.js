import React, { useState } from 'react'
import { GridToolbarContainer  } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { Add, Edit } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import DocumentModal from '../../../pages/document/staffHandle/DocumentModal'
import { createDocument, updateDocument } from '../../../actions/document'

const CustomToolbar = ({ selectedCellParams, selectedRow, setModalOpen, modalOpen }) => {
  const dispatch = useDispatch();
  const [documentData, setDocumentData] = useState({});
  const [actionType, setActionType] = useState('');

  // console.log(selectedCellParams)
  // console.log(selectedRow)

  // Modal handle
  const handleOpenModal = (type) => {
    setModalOpen(true);
    setActionType(type);
    if (selectedCellParams?.value && actionType === 'Edit') {
      setDocumentData({id: selectedCellParams?.id, document: { 'name': selectedCellParams?.value?.name, 'status': selectedCellParams?.value?.status}})
    }
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  // Form handle
  const handleChange = (e) => {
    // console.log(e.target)
    if (e.target) {
      setDocumentData({id: selectedCellParams?.id, document: {...documentData.document, [e.target.name]: e.target.value}})
    } else {
      setDocumentData({id: selectedCellParams?.id, document: {...documentData.document, 'image': e.base64}})
    }
    console.log(documentData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (actionType === 'Create') {
      dispatch(createDocument(documentData)) 
    } else {
      dispatch(updateDocument(documentData))
    }
    handleCloseModal();
  }

  return (
    <>
      <GridToolbarContainer>
        <Button
          onMouseDown={() => handleOpenModal('Create')}
          disabled={!selectedCellParams}
          startIcon={<Add />}
        >
          Create new document
        </Button>
        <Button
          style={{margin: '0 10px'}} 
          onMouseDown={() => handleOpenModal('Edit')}
          disabled={!selectedCellParams}
          startIcon={<Edit />}
        >
          Modify document
        </Button>
      </GridToolbarContainer>
      <DocumentModal handleChange={handleChange} handleSubmit={handleSubmit} handleCloseModal={handleCloseModal} modalOpen={modalOpen} actionType={actionType} documentData={documentData}/>
    </>
  )
};

export default CustomToolbar
