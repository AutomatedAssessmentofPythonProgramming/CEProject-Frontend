import React, { useState,useEffect } from 'react';
import { useParams,useHistory } from "react-router-dom";
import ExerciseService from '../services/Exercise.Service';
import WorkbookService from '../services/Workbook.Service';
import { type } from '@testing-library/user-event/dist/type';

export default function NewExercise() {
    const params=useParams();
    const teamid = params.teamid
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const today = new Date()
  const todayTimeString = today.toISOString();
  // const month = (today.getMonth()+1).toString()
  // console.log(typeof(todayTimeString))
  // console.log(todayTimeString)
  // const currentDate = (today.getFullYear()).toString() + '-' + month.padStart(2,'0') + '-' + (today.getDate()).toString().padStart(2,'0') + 'T'+(today.getHours()).toString().padStart(2,'0') + ':' + (today.getMinutes()).toString().padStart(2,'0') + ':' + (today.getSeconds()).toString().padStart(2,'0')+'.000Z'
  
  //const history = useHistory();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data, e.g. submit to a server
    console.log({ title, description, selectedDate ,selectedTime});
    const inputdate = selectedDate+' '+selectedTime
    // const inputdate = '2023-04-23 10:30:00'
    const duetime = new Date(inputdate)
    const duetimeString = duetime.toISOString();
    ExerciseService.createExercise(title,description,"string","string","string")
    .then((res) => {
      WorkbookService.createWorkbook(teamid,res.id,"0",todayTimeString,duetimeString,true)
    })
    // console.log(duetime)
    // console.log(typeof(duetime))
    // console.log(currentDate)
    // console.log(typeof(currentDate))
    //window.location.href= `/team/${encodeURIComponent(teamid)}/${encodeURIComponent(title)}/edit`
  };

  return (
    <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="mt-6 flex justify-start max-w-md w-full mb-8">
                <a href={"/team/" + teamid}>
                    <button 
                        className="h-10 px-3 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                        id = "back"
                    >
                        &lt; Back to team
                    </button>
                </a>
            </div>
      <div className='border border-gray-300 max-w-md w-full rounded-md px-4'>
      <h1 className="font-semibold text-2xl text-white my-4">
        Create Exercise
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='text-white text-lg my-2'>
          Title
        </div>
        <input
            type="text"
            id="title-input"
            value={title}
            onChange={handleTitleChange}
            className='rounded-md p-2 w-full'
            required
          />
        <div className='text-white text-lg my-2'>
          Description
        </div>
        <input
            type="text"
            id="description-input"
            value={description}
            onChange={handleDescriptionChange}
            className='rounded-md p-2 w-full'
            required
          />
        <div className='text-white text-lg my-2'>
          Due Date
        </div>
        <input
          type="date"
          id="date-picker"
          value={selectedDate}
          onChange={handleDateChange}
          className='rounded-md p-2'
          required
        />
        <input
              type="time"
              id="time-picker"
              value={selectedTime}
              onChange={handleTimeChange}
              className="rounded-md p-2 ml-2"
              required
            />
        <div className="flex flex-row justify-end my-4">
                <button type="submit" className="px-5 py-2 ml-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md">
                    Create
                </button>
                
            </div>
      </form>
      </div>
      
    </div>
  );
}
