import TeammanageCard from "../components/TeammanageCard";
import { teammanagecard } from "../constants/tempCards"
import { useEffect, useState } from "react";
import NewTeam from "../components/NewTeam";
import Addmember from "../components/Addmember";

const card = teammanagecard

export default function MagageTeamPage(){
    const [isLoading, setIsLoading] = useState(false);
    return(
        <>
        <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="flex justify-between max-w-3xl w-full mb-16">
                <h2 className="mt-6 text-3xl font-bold text-white">
                    Manage Teams
                </h2>
                <div className="mt-6 flex justify-end">
                <a href="/createteam">
                        <button 
                            className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none"
                            id = "NewTeam"
                        >
                            + New Team
                        </button>
                        </a>
                </div>
                
            </div>
            <div className="bg-gray-700 rounded-md flex flex-col max-w-3xl w-full">
                {/* <div className="bg-gray-700 rounded-md flex justify-start max-w-3xl w-full text-white py-4 text-lg font-normal">
                    <p className="px-4">Team Name</p>
                    <p className="">Total Student</p>
                </div> */}
                <div className="flex flex-col w-full px-4">
                        {card.map(Title=>
                            <TeammanageCard team={Title}/>
                        )}
                </div>
            </div>
        </div>
        </>
    );
}