
import { membersubmitcard,exercisecard } from "../constants/tempCards";
import { useEffect, useState } from "react";
import EditTeam from "../components/EditTeam";
import Addmember from "../components/Addmember";
import { useParams } from "react-router-dom";
import ExSubmissionCard from "../components/ExSubmissionCard";
import AllMemberSearch from "../components/AllMemberSearch";


export default function ExSubmissionPage(){
    const card = membersubmitcard
    const memberid=[]
    for(let i=0;i<membersubmitcard.length;i++){

        memberid.push(membersubmitcard[i].studentid)
    }
    const exdes = exercisecard[0]

    const params=useParams();
    const teamid = params.teamid
    const exid = params.exid
    console.log(params)
    console.log(memberid)
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const handleOnClose = () => setIsOpen(false)
    
    const handleClick=(e)=>{
        
        setIsOpen(!isOpen)
        console.log(!isOpen)
    }
    return(
        <>
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
                    {exid}
                </h2>
                
                <div className="mt-6 flex justify-end">
                    <button 
                        className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none"
                        
                        id = "editcode"
                    >
                        Edit Example Code
                    </button>
                    <button 
                        className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                        
                        id = "editdes"
                    >
                        Edit Description
                    </button>
                </div>
                <Addmember onClose={handleOnClose} open={isOpen}/>
            </div>
            <h2 className="mt-6 text-xl font-medium text-white max-w-3xl w-full">
                    {exdes.description}
            </h2>
            <h2 className="mt-6 text-xl font-medium text-white max-w-3xl w-full">
                    {"Due Date: "+exdes.duedate}
            </h2>
            <div className="border-b border-gray-300 max-w-3xl w-full my-8"> </div>
            
            <div className="flex justify-between max-w-3xl w-full">
                <div className="mb-4 text-2xl font-bold text-white">
                    Submission
                </div>
                <AllMemberSearch memberid={memberid} teamid={teamid}/>
            </div>
            
            <div className="bg-gray-700 rounded-md flex flex-col max-w-3xl w-full">
                <div className="bg-gray-700 rounded-md flex justify-between max-w-3xl w-full text-white py-4 text-lg font-normal">
                    <p className="pl-6 pr-16">Students</p>
                    <p className="px-2">Student ID</p>
                    <p className="px-2">Submitted Date</p>
                    <p className="pr-16">Submission</p>
                    <p>      </p>
                </div>
                <div className="flex flex-col w-full px-4">
                        {card.map(Title=>
                            <ExSubmissionCard membersubmit={Title} teamid={teamid}/>
                        )}
                </div>
            </div>
        </div>
        </>
    );
}