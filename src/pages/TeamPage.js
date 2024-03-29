//Team Owner will see this

import TeamExOwnerCard from "../components/TeamExOwnerCard";
import TeamExMemberCard from "../components/TeamExMemberCard";
import { exercisecard } from "../constants/tempCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamService from "../services/Team.Service";
import ExerciseService from "../services/Exercise.Service";

const card = exercisecard

export default function TeamPage(){
    const params=useParams();
    const teamid = params.teamid
    const [teamDetail,setTeamDetail] = useState([])
    const [teamExercise,setTeamExercise] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    // const [isStaff,setIsStaff] = useState(true)
    useEffect(() => {
        TeamService.getTeam(teamid).then((res) => {
          setTeamDetail(res.data);
            console.log(teamDetail)
        });
        TeamService.getTeamExercise(teamid).then((res) => {
            setTeamExercise(res.data);
            console.log(teamExercise)
        });
      }, []);
  
    const handleDelete = async (pk)=>{
        console.log("delete exercise" + pk)
        setTeamExercise(teamExercise.filter((item) => item.pk !== pk))
        await ExerciseService.deleteExercise(pk)
    }
    if(teamDetail.is_staff){
        return(
        <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="flex justify-between max-w-3xl w-full">
                <p className="mt-6 text-3xl font-bold text-white">
                    {teamDetail.name}
                </p>
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
            <div className="flex justify-between max-w-3xl w-full mt-6 text-xl text-white">
                <div className="font-normal">{teamDetail.detail}</div>
                <div className="font-semibold">Invite Code : {teamDetail.inviteCode}</div>
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
                        {teamExercise.map(Title=>
                            <TeamExOwnerCard exercise={Title} teamid={teamid} onDelete={handleDelete}/>
                        )}
                </div>
            </div>
        </div>
        
        );
    }
    return(        
        <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="flex justify-between max-w-3xl w-full">
                <p className="mt-6 text-3xl font-bold text-white">
                    {teamDetail.name}
                </p>
                
                {/* <EditTeam onClose={handleOnClose} open={isOpen}/> */}
            </div>
            <div className="flex justify-between max-w-3xl w-full mt-6 text-xl text-white">
                <div className="font-normal">{teamDetail.detail}</div>
                {/* <div className="font-semibold">Invite Code : {teamDetail.inviteCode}</div> */}
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
                        {teamExercise.map(Title=>
                            <TeamExMemberCard exercise={Title} teamid={teamid}/>
                        )}
                </div>
            </div>
        </div>
            
    );
}