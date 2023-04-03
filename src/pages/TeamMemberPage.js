
import { membercard } from "../constants/tempCards";
import { useEffect, useState } from "react";
import EditTeam from "../components/EditTeam";
import Addmember from "../components/Addmember";
import { useParams } from "react-router-dom";
import MemberCard from "../components/MemberCard";
import AllMemberSearch from "../components/AllMemberSearch";
const card = membercard
const memberid=[]
for(let i=0;i<membercard.length;i++){
    console.log(membercard[i].studentid)
    memberid.push(membercard[i].studentid)
}
export default function TeamMemberPage(){
    const params=useParams();
    const teamid = params.teamid
    // console.log(teamid)
    for(let i=0;i<membercard.length;i++){console.log(membercard[i].studentid)}
    
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const handleOnClose = () => setIsOpen(false)
    
    const handleClick=(e)=>{
        
        setIsOpen(!isOpen)
        console.log(!isOpen)
    }
    return(
        <>
        <div className="min-h-screen h-max flex flex-col justify-start items-center h-screen py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
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
                    {teamid + " Members"}
                </h2>
                <div className="mt-6 flex justify-end">
                    <button 
                        className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none"
                        onClick={handleClick}
                        id = "invite"
                    >
                        + Invite
                    </button>
                </div>
                <Addmember onClose={handleOnClose} open={isOpen}/>
            </div>
            <div className="border-b border-gray-300 max-w-3xl w-full my-8"> </div>
            
            <div className="flex justify-between max-w-3xl w-full">
                <div className="mb-4 text-2xl font-bold text-white">
                    Members
                </div>
                <AllMemberSearch memberid={memberid} teamid={teamid}/>
            </div>
            
            <div className="bg-gray-700 rounded-md flex flex-col max-w-3xl w-full">
                <div className="bg-gray-700 rounded-md flex justify-between max-w-3xl w-full text-white py-4 text-lg font-normal">
                    <p className="pl-6 pr-16">Students</p>
                    <p className="px-2">Student ID</p>
                    <p className="px-2">Total Submit</p>
                    <p className="pr-16">Scores</p>
                    <p>      </p>
                </div>
                <div className="flex flex-col w-full px-4">
                        {card.map(Title=>
                            <MemberCard member={Title}/>
                        )}
                </div>
            </div>
        </div>
        </>
    );
}