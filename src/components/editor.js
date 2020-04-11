import React, { useState } from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-solarized_dark";


function Editor({getInput}) {

  const [change, setChange] = useState();

  const handleChange = (input) => {
    setChange(input);
    getInput(input);
  }

  return (
    <div className='editor'>
      <div className='settings'>
        <section>
          <h3>Markdown Editor</h3>
        </section>
        <section className='settings-options'>
          <h5>Themes: </h5>
          <div className='option' id='tomorrow' style={{backgroundColor: 'white'}}></div>
          <div className='option' id='twilight' style={{backgroundColor: 'white'}}></div>
          <div className='option' id='monokai' style={{backgroundColor: 'white'}}></div>
          <div className='option' id='solarized_dark' style={{backgroundColor: 'white'}}></div>
        </section>
      </div>
      <AceEditor
        mode='markdown'
        theme='twilight'
        onChange={handleChange}
        fontSize={14}
        value={change}
      />
    </div>
  )
}

export default Editor
