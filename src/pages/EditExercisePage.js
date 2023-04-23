import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { darcula } from '@uiw/codemirror-themes-all';
import {material} from '@uiw/codemirror-themes-all'
import { useParams } from "react-router-dom";
import ExerciseService from '../services/Exercise.Service'

export default function EditExercisePage() {
  
  const params=useParams();
  const teamid = params.teamid
  const exid = params.exid
  const [exDetail,setExDetail] = useState([]);
  const [title,setTitle] = useState('')
  const [ins,setIns] = useState('')
  const [code, setCode] = useState('');
  const [configCode, setConfigCode] = useState('');
  const [unittest,setUnittest] = useState('');

  useEffect(() => {
    // Load the text file using the Fetch API
    ExerciseService.getExercise(exid,teamid).then((res) => {
      setExDetail(res.data)
      setCode(res.data.source_code)
      setTitle(res.data.title)
      setIns(res.data.instruction)
      setConfigCode(res.data.config_code)
      setUnittest(res.data.unittest)
      // console.log(res.data)
    })

    // fetch(process.env.PUBLIC_URL + '/testcode.txt')
    //   .then((response) => response.text())
    //   .then((text) => {
    //     // console.log(text);
    //     setCode(text)});
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleInsChange = (event) => {
    setIns(event.target.value);
  };

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
    console.log(title,ins,unittest,configCode,code);
    ExerciseService.editExercise(title,ins,code,configCode,unittest,exid)
    window.location.href= `/team/${encodeURIComponent(teamid)}`
  }

  return (
    <div>
      <div className="bg-gray-900 p-4 flex items-center justify-between border-t-8 border-gray-900">
        <div className="text-white font-bold text-xl">
          Editing {exDetail.title}
        </div>
        <button 
          className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Save
        </button>
      </div>
      <div className="border-b border-gray-300 max-w-3xl w-full"> </div>
      <div className="flex">
        <div className="w-1/4 px-4 pt-4 flex flex-col bg-gray-900 border-t-8 border-gray-900">
          <p className="text-lg font-semibold mb-2 text-white">Exercise Title</p>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className='rounded-md p-2 w-full mb-2'
            required
            placeholder={exDetail.title}
          />
          <p className="text-lg font-semibold mb-2 text-white">Instruction</p>
          <input
            type="text"
            id="instruction"
            value={ins}
            onChange={handleInsChange}
            className='rounded-md p-2 w-full mb-2'
            required
            placeholder={exDetail.instruction}
          />
          <div className='text-lg font-semibold mb-2 text-white'>
            Unit Test
          </div>
          <CodeMirror
            value={unittest}
            height="250px"
            theme={darcula}
            extensions={[python()]}
            onChange={setUnittest}
            className="text-base"
          />
          <div className='text-lg font-semibold mb-2 text-white'>
            Config Code
          </div>
          <CodeMirror
            value={configCode}
            height="250px"
            theme={darcula}
            extensions={[python()]}
            onChange={setConfigCode}
            className="text-base"
          />
        </div>
        <div className="w-3/4 pr-4 pt-4 border-t-8 border-l-8 border-gray-900 bg-gray-900">
          <div className='text-lg font-semibold mb-2 text-white'>
            Example Code
          </div>
          <CodeMirror
            value={code}
            height="800px"
            theme={darcula}
            extensions={[python()]}
            onChange={setCode}
            className="text-base"
          />
        </div>
      </div>
    </div>
  );
}
