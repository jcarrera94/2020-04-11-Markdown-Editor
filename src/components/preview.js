import React from 'react';

function Preview({ output }) {

  return (
    <div className='preview-container'>
      <div className='preview-panel'>
        <h3 style={{ marginLeft: '8px' }}>Preview HTML:</h3>
        <div dangerouslySetInnerHTML={{__html: output}}></div>
      </div>
    </div>
  )
}

export default Preview
