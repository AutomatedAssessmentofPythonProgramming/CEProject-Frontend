import EachMemberCard from "../components/EachMemberCard";
import { memberexercisecard } from "../constants/tempCards";
import { useEffect, useState } from "react";
import EditTeam from "../components/EditTeam";
import { useParams } from "react-router-dom";

const card = memberexercisecard

export default function EachMemberPage(){
    const params=useParams();
    const stdid = params.stdid
    const teamid=params.teamid
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen,setIsOpen] = useState(false);

    const handleOnClose = () => setIsOpen(false)
 

    const handleClick=(e)=>{
        
        setIsOpen(!isOpen)
        console.log(!isOpen)
    }
    
    return(
        
        <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="mt-6 flex justify-start max-w-3xl w-full">
                <a href={"/team/" + teamid}>
                    <button 
                        className="h-10 px-3 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                        id = "invite"
                    >
                        &lt; Back to team
                    </button>
                </a>
            </div>
            <div className="flex justify-between max-w-3xl w-full">
                <h2 className="mt-6 text-3xl font-bold text-white">
                    {stdid}
                </h2>
                <div className="mt-6 flex justify-end">
                    <button 
                        className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-800 focus:outline-none"
                        onClick={handleClick}
                        id = "EditTeam"
                    >
                        Delete
                    </button>
                </div>
                <EditTeam onClose={handleOnClose} open={isOpen}/>
            </div>
            <div className="border-b border-gray-300 max-w-3xl w-full my-8"> </div>
            
            <div className="my-4 text-2xl font-bold text-white w-full max-w-3xl">
                 Exercises
            </div>
            <div className="bg-gray-700 rounded-md flex flex-col max-w-3xl w-full">
                <div className="bg-gray-700 rounded-md flex justify-between max-w-3xl w-full text-white py-4 text-lg font-normal">
                    <p className="pl-6 pr-16">Title</p>
                    <p className="px-2">Submitted Date</p>
                    <p className="px-2">Scores</p>
                    <p className="pr-16">Submission</p>
                    <p>      </p>
                </div>
                <div className="flex flex-col w-full px-4">
                        {card.map(Title=>
                            <EachMemberCard memberexcard={Title} teamid={teamid} stdid={stdid}/>
                        )}
                </div>
            </div>
        </div>
        
    );
}