import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { darcula } from '@uiw/codemirror-themes-all';
import {material} from '@uiw/codemirror-themes-all'
import { useParams } from "react-router-dom";
import ExerciseService from '../services/Exercise.Service'
import WorkbookService from '../services/Workbook.Service';
export default function EditExercisePage() {
  
  const params=useParams();
  const teamid = params.teamid
  const exid = params.exid
  const [exDetail,setExDetail] = useState([]);
  const [title,setTitle] = useState('')
  const [ins,setIns] = useState('')
  const [filename,setFilename] = useState('')
  const [datetime,setDateTime] = useState('')
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sourcecode, setSourceCode] = useState('');
  const [guidecode, setGuideCode] = useState('');
  const [configCode, setConfigCode] = useState('');
  const [unittest,setUnittest] = useState('');

  useEffect(() => {
    // Load the text file using the Fetch API
    ExerciseService.getExercise(exid,teamid).then((res) => {
      setExDetail(res.data)
      setSourceCode(res.data.source_code)
      setTitle(res.data.title)
      setIns(res.data.instruction)
      setConfigCode(res.data.config_code)
      setUnittest(res.data.unittest)
      setFilename(res.data.code_name)
      setGuideCode(res.data.example_code)
      // setDateTime(res.data.due)
      // const timezoneOffset = 7 * 60; // +7 timezone in minutes
      // const dateTime = new Date(datetime);
      // const utcTimestamp = dateTime.getTime();
      // const localTimestamp = utcTimestamp + timezoneOffset * 60 * 1000;
      // const localDateTime = new Date(localTimestamp).toISOString();
      setSelectedDate(res.data.due.split('T')[0])
      setSelectedTime(res.data.due.split('T')[1].substring(0,5))
      // setSelectedDate(localDateTime.split('T')[0])
      // setSelectedTime(localDateTime.split('T')[1].split('.')[0])
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
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const handleFilenameChange = (event) => {
    setFilename(event.target.value);
  };
  // const onChange = React.useCallback((value, viewUpdate) => {
  //   console.log('value:', value);
  // }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data, e.g. submit to a server
    const inputdate = selectedDate+' '+selectedTime
    // const inputdate = '2023-04-23 10:30:00'
    const duetime = new Date(inputdate)
    const duetimeString = duetime.toISOString();
    console.log(teamid,exid,teamid,exid,'0',exDetail.created,duetimeString,true);
    WorkbookService.editWorkbook(teamid,exid,teamid,exid,'0',exDetail.created,duetimeString,true)
    .then((res)=>{
      console.log(res.data)
      alert('Exercise Detail Edited!')
    }).catch((error) => {
      console.error(error);
  })
    //window.location.href= `/team/${encodeURIComponent(teamid)}/${encodeURIComponent(title)}/edit`
  };

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
    const inputdate = selectedDate+' '+selectedTime
    // const inputdate = '2023-04-23 10:30:00'
    const duetime = new Date(inputdate)
    const duetimeString = duetime.toISOString();
    // console.log(title,ins,unittest,configCode,sourcecode);
    ExerciseService.editExercise(title,ins,sourcecode,configCode,unittest,exid,guidecode,filename)
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
        <div className="w-2/5 px-4 pt-4 flex flex-col bg-gray-900 border-t-8 border-gray-900">
          <form onSubmit={handleSubmit}>
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
            <p className="text-lg font-semibold mb-2 text-white">File name</p>
            <input
              type="text"
              id="instruction"
              value={filename}
              onChange={handleFilenameChange}
              className='rounded-md p-2 w-full mb-2'
              required
              placeholder={exDetail.code_name}
            />
            <div className='text-white text-lg mb-2 font-semibold'>
            Due Date
            </div>
            <div className='flex'>
            <input
              type="date"
              id="date-picker"
              value={selectedDate}
              onChange={handleDateChange}
              className='rounded-md p-2 mb-2'
              required
            />
            <input
              type="time"
              id="time-picker"
              value={selectedTime}
              onChange={handleTimeChange}
              className="rounded-md p-2 ml-2 mb-2"
              required
            />
            </div>
            <div className="flex flex-row justify-end my-4">
                <button type="submit" className="px-5 py-2 ml-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md">
                    Save Detail
                </button>
                
            </div>
          </form>
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
          <div className='text-lg font-semibold my-2 text-white'>
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
        <div className="w-3/5 pr-4 pt-4 border-t-8 border-l-8 border-gray-900 bg-gray-900">
          <div className='text-lg font-semibold mb-2 text-white'>
            Example Code
          </div>
          <CodeMirror
            value={sourcecode}
            height="450px"
            theme={darcula}
            extensions={[python()]}
            onChange={setSourceCode}
            className="text-base"
          />
          <div className='text-lg font-semibold my-2 text-white'>
            Guideline Code
          </div>
          <CodeMirror
            value={guidecode}
            height="450px"
            theme={darcula}
            extensions={[python()]}
            onChange={setGuideCode}
            className="text-base"
          />
        </div>
      </div>
    </div>
  );
}
