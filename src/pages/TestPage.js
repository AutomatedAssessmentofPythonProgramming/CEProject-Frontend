import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { darcula } from '@uiw/codemirror-themes-all';
import {material} from '@uiw/codemirror-themes-all'

export default function TestPage() {
  const [code, setCode] = useState('');

  useEffect(() => {
    // Load the text file using the Fetch API
    fetch(process.env.PUBLIC_URL + '/testcode.txt')
      .then((response) => response.text())
      .then((text) => {
        // console.log(text);
        setCode(text)});
  }, []);

  // const onChange = React.useCallback((value, viewUpdate) => {
  //   console.log('value:', value);
  // }, []);
  const handleClick = () => {
    console.log(code);
  }

  return (
    <div>
      <div className="bg-gray-700 p-4 flex items-center justify-between border-t-8">
        <div className="text-white">EX1</div>
        <button 
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Turn In
        </button>
      </div>
      <CodeMirror
        value={code}
        height="800px"
        theme={darcula}
        extensions={[python()]}
        onChange={setCode}
        className=" border-gray-300"
      />
    </div>
  );
}
