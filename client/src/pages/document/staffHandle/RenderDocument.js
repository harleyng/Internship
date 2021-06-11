import React from 'react'

const RenderDocument = (props) => {
  const { value } = props;
  return (
    <div style={{ position: 'relative', zIndex: '0'}}>
      {value?.image && (
        <iframe src={value?.image} width='306px' height='350px' style={{display: 'block'}}/>
      )}
    </div>
  )
}

export default RenderDocument
