import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { darcula } from '@uiw/codemirror-themes-all';
import {material} from '@uiw/codemirror-themes-all'
import { useParams } from "react-router-dom";

export default function EditExercisePage() {
  const [code, setCode] = useState('');
  const params=useParams();
  const teamid = params.teamid
  const exid = params.exid

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
    // fetch('/save-code', {
    //     method: 'POST',
    //     body: JSON.stringify({ code }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     // handle the response from the server
    //     console.log(data);
    //     // navigate to the next page
    //     window.location.href = '/next-page';
    //   })
    //   .catch(error => {
    //     // handle errors
    //     console.error(error);
    //   });
    console.log(code);
    window.location.href= `/team/${encodeURIComponent(teamid)}`
  }

  return (
    <div>
      <div className="bg-gray-700 p-4 flex items-center justify-center border-t-8">
        <button 
          className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Save Example
        </button>
      </div>
      <div className="flex">
  <div className="w-1/4 p-4">
    <h2 className="text-lg font-bold mb-4">{exid}</h2>
    <p className="text-gray-700">
      learn how to print
    </p>
  </div>
  <div className="w-3/4">
    <CodeMirror
      value={code}
      height="800px"
      theme={darcula}
      extensions={[python()]}
      onChange={setCode}
      className=" border-gray-300"
    />
  </div>
</div>
    </div>
  );
}
