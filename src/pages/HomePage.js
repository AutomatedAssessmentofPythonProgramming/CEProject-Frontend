import TeamCard from "../components/TeamCard"
import { tempcard } from "../constants/tempCards"
import { useEffect, useState } from "react";
import NewTeam from "../components/NewTeam";

const card = tempcard

export default function Homepage(){
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const handleOnClose = () => setIsOpen(false)
    
    const handleClick=(e)=>{
        
        setIsOpen(!isOpen)
        console.log(!isOpen)
    }


    return(
        <>
            <div className="min-h-full flex flex-col justify-start items-center h-screen py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
                 <div className="flex justify-between max-w-3xl w-full mb-16">
                    <h2 className="mt-6 text-3xl font-bold text-white">
                        Your Teams
                    </h2>
                    <div className="mt-6 flex justify-end">
                        <button 
                            className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none"
                            onClick={handleClick}
                            id = "New Team"
                        >
                            + New Team
                        </button>
                        <button 
                            className="h-10 px-3 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                            
                            id = "Manage Team"
                        >
                            Manage Team
                        </button>
                     </div>
                 </div>
                <NewTeam onClose={handleOnClose} open={isOpen}/>
                <div className="flex flex-col max-w-3xl w-full">
                    {card.map(Title=>
                        <TeamCard team={Title}/>
                    )}
                 </div>
            </div>
        </>
    )
}