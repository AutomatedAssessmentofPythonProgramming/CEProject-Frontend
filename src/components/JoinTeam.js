import React, { useState } from 'react';
import { useParams,useHistory } from "react-router-dom";
import TeamService from '../services/Team.Service';

export default function JoinTeam() {
    // const params=useParams();
    // const teamid = params.teamid
  const [code, setCode] = useState('');
  //const history = useHistory();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data, e.g. submit to a server
    console.log(code);
    TeamService.addTeamMember(code)
    window.location.href= `/home`
  };

  return (
    <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="mt-6 flex justify-start max-w-md w-full mb-8">
                <a href={"/home"}>
                    <button 
                        className="h-10 px-3 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                        id = "invite"
                    >
                        &lt; Back to home
                    </button>
                </a>
            </div>
      <div className='border border-gray-300 max-w-md w-full rounded-md px-4'>
      <h1 className="font-semibold text-2xl text-white my-4">
        join Team
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='text-white text-lg my-2'>
          Invite Code
        </div>
        <input
            type="text"
            id="title-input"
            value={code}
            onChange={handleCodeChange}
            className='rounded-md p-2 w-full'
          />
        <div className="flex flex-row justify-end my-4">
                <button type="submit" className="px-5 py-2 ml-2 bg-green-700 hover:bg-green-800 text-white rounded-md">
                    Join
                </button>
            </div>
      </form>
        {/* <div className = "my-4 text-white items-center flex flex-row justify-center">
            <hr className="h-0.5 w-full bg-gray-300 rounded-md"></hr>
            <p className="mx-4">or</p>
            <hr className="h-0.5 w-full bg-gray-300 rounded-md"></hr> 
        </div>
        <h1 className="font-semibold text-2xl text-white my-4">
        Join Team
      </h1>
      <form onSubmit={handleSubmit2}>
        <div className='text-white text-lg my-2'>
          Team ID
        </div>
        <input
            type="text"
            id="title-input"
            value={teamId2}
            onChange={handleTeamId2Change}
            className='rounded-md p-2 w-full'
          />
        
        <div className="flex flex-row justify-end my-4">
                <button type="submit" className="px-5 py-2 ml-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md">
                    Join
                </button>
            </div>
      </form> */}
      </div>
      
    </div>
  );
}
