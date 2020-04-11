import React, { useState } from 'react';
import './App.css';
import Editor from './components/editor';
import Preview from './components/preview';
import md from 'markdown-it';

function App() {

  const [output, setOutput] = useState();

  const createMarkup = (markdown) => {
    setOutput(md().render(markdown));
  }

  return (
    <div className="App">
      <Editor getInput={createMarkup}/>
      <Preview output={output}/>
    </div>
  );
}

export default App;
