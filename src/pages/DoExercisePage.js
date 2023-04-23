import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { darcula } from '@uiw/codemirror-themes-all';
import {material} from '@uiw/codemirror-themes-all'
import { useParams } from "react-router-dom";
import ExerciseService from '../services/Exercise.Service'

export default function DoExercisePage() {
  
  const params=useParams();
  const teamid = params.teamid
  const exid = params.exid
  const [exDetail,setExDetail] = useState([]);
  const [title,setTitle] = useState('')
  const [ins,setIns] = useState('')
  const [code, setCode] = useState('');

  useEffect(() => {
    // Load the text file using the Fetch API
    ExerciseService.getExercise(exid,teamid).then((res) => {
      setExDetail(res.data)
      setCode("print(\"hello world!\")")
      setTitle(res.data.title)
      setIns(res.data.instruction)
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

  const handleClick = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const formData = new FormData();
    formData.append('file', blob);
    console.log(title,ins,formData);
    ExerciseService.submitExercise(exid,teamid,formData)
    window.location.href= `/team/${encodeURIComponent(teamid)}`
  }

  return (
    <div>
      <div className="bg-gray-900 p-4 flex items-center justify-between border-t-8 border-gray-900">
        <div className="text-white font-bold text-xl">
          Doing {exDetail.title}
        </div>
        <button 
          className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Turn In
        </button>
      </div>
      <div className="border-b border-gray-300 max-w-3xl w-full"> </div>
      <div className="flex">
        <div className="w-1/4 px-4 pt-4 flex flex-col bg-gray-900 border-t-8 border-gray-900">
          <p className="text-lg font-semibold mb-4 text-white">Exercise Title</p>
          <p className="text-base font-normal mb-8 text-white">{title}</p>
          <p className="text-lg font-semibold mb-4 text-white">Instruction</p>
          <p className="text-base font-normal mb-8 text-white">{ins}</p>
        </div>
        <div className="w-3/4 pr-4 pt-4 border-t-8 border-l-8 border-gray-900 bg-gray-900">
          <div className='text-lg font-semibold mb-2 text-white'>
            Code
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
