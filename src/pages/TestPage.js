//Team Owner will see this

import TeamExMemberCard from "../components/TeamExMemberCard";
import { exercisecard } from "../constants/tempCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamService from "../services/Team.Service";
const card = exercisecard

export default function TestPage(){
    const params=useParams();
    const teamid = params.teamid
    const teamdetail = TeamService.getTeam(teamid)
    const [isLoading, setIsLoading] = useState(false);

  
    return(
        
        <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="flex justify-between max-w-3xl w-full">
                <h2 className="mt-6 text-3xl font-bold text-white">
                    Test
                </h2>
                
                {/* <EditTeam onClose={handleOnClose} open={isOpen}/> */}
            </div>
            <div className="border-b border-gray-300 max-w-3xl w-full my-8"> </div>

            <div className="mb-4 text-2xl font-bold text-white w-full max-w-3xl">
                 Exercises
            </div>
            <div className="bg-gray-700 rounded-md flex flex-col max-w-3xl w-full">
                <div className="bg-gray-700 rounded-md flex justify-between max-w-3xl w-full text-white py-4 text-lg font-normal">
                    <p className="pl-6 pr-16">Title</p>
                    <p className="px-2">Duedate</p>
                    <p className="pr-16">Submission</p>
                </div>
                <div className="flex flex-col w-full px-4">
                        {card.map(Title=>
                            <TeamExMemberCard exercise={Title} teamid={teamid}/>
                        )}
                </div>
            </div>
        </div>
        
    );
}