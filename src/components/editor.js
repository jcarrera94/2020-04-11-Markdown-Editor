import React, { useState } from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-solarized_dark";


function Editor({getInput}) {

  const [change, setChange] = useState();
  const [theme, setTheme] = useState('twilight')

  const handleChange = (input) => {
    setChange(input);
    getInput(input);
  };

  const handleClick = ({ target: { id }}) => {
    setTheme(id);
  }

  return (
    <div className='editor'>
      <div className='settings'>
        <section>
          <h3>Markdown Editor</h3>
        </section>
        <section className='settings-options'>
          <h5>Themes: </h5>
          <div className='option' id='tomorrow' style={{backgroundColor: 'white'}} onClick={handleClick}></div>
          <div className='option' id='twilight' style={{backgroundColor: '#222222'}} onClick={handleClick}></div>
          <div className='option' id='monokai' style={{backgroundColor: '#464825'}} onClick={handleClick}></div>
          <div className='option' id='solarized_dark' style={{backgroundColor: '#0D2B36'}} onClick={handleClick}></div>
        </section>
      </div>
      <AceEditor
        mode='markdown'
        theme={theme}
        onChange={handleChange}
        fontSize={14}
        value={change}
      />
    </div>
  )
}

export default Editor
