//Team Owner will see this

import TeamExOwnerCard from "../components/TeamExOwnerCard";
import { exercisecard } from "../constants/tempCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamService from "../services/Team.Service";
const card = exercisecard

export default function TeamPage(){
    const params=useParams();
    const teamid = params.teamid
    const teamdetail = TeamService.getTeam(teamid)
    const [isLoading, setIsLoading] = useState(false);

  
    return(
        
        <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="flex justify-between max-w-3xl w-full">
                <h2 className="mt-6 text-3xl font-bold text-white">
                    {teamid}
                </h2>
                <div className="mt-6 flex justify-end">
                    <a href={teamid + "/edit"}>
                    <button 
                        className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                       
                        id = "EditTeam"
                    >
                        Edit Team
                    </button>
                    </a>
                </div>
                {/* <EditTeam onClose={handleOnClose} open={isOpen}/> */}
            </div>
            <div className="border-b border-gray-300 max-w-3xl w-full my-8"> </div>
          
            <div className="my-4 flex justify-start w-full max-w-3xl">
                <a href={teamid + "/createex"}>
                <button 
                    className="h-10 px-3 mr-2 text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none"
                    
                    id = "CreateExercise"
                >
                     + Create Exercise
                </button>
                </a>
                <a href={teamid + "/member"}>
                <button 
                    className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                    id = "CreateExercise"
                >
                     All members
                </button>
                </a>
            </div>
            
            <div className="my-4 text-2xl font-bold text-white w-full max-w-3xl">
                 Exercises
            </div>
            <div className="bg-gray-700 rounded-md flex flex-col max-w-3xl w-full">
                <div className="bg-gray-700 rounded-md flex justify-between max-w-3xl w-full text-white py-4 text-lg font-normal">
                    <p className="pl-6 pr-16">Title</p>
                    <p className="px-2">Duedate</p>
                    <p className="px-2">Example Code</p>
                    <p className="pr-16">Submission</p>
                    <p>      </p>
                </div>
                <div className="flex flex-col w-full px-4">
                        {card.map(Title=>
                            <TeamExOwnerCard exercise={Title} teamid={teamid}/>
                        )}
                </div>
            </div>
        </div>
        
    );
}