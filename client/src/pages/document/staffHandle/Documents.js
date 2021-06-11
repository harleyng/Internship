import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import DocumentDataGrid from '../../../components/document/render/DocumentDataGrid';

import { getDocuments } from '../../../actions/document'

const Documents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocuments());

  }, [dispatch])

  return (
    <div>
      <DocumentDataGrid />
    </div>
  );
}

export default Documents

