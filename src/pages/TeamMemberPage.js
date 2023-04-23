
import { membercard } from "../constants/tempCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamMemberCard from "../components/TeamMemberCard";
import AllMemberSearch from "../components/AllMemberSearch";
import TeamService from "../services/Team.Service";


export default function TeamMemberPage(){
    const params=useParams();
    const teamid = params.teamid
    // console.log(teamid)
    // for(let i=0;i<membercard.length;i++){console.log(membercard[i].studentid)}
    // const card = membercard
    const [isLoading, setIsLoading] = useState(false);
    const [teamDetail,setTeamDetail] = useState([])
    const [teamMembers,setTeamMembers] = useState([])
    const [allId,setAllId]=useState([])

    useEffect(() => {
        TeamService.getTeam(teamid).then((res) => {
          setTeamDetail(res.data);
            // console.log(teamDetail)
        });
        TeamService.getTeamMembers(teamid)
            .then((res) => {
                setTeamMembers(res.data.members);
                const memberid = res.data.members.map((member) => member.studentid);
                setAllId(memberid);
            })
            .catch((error) => {
                console.log(error);
            });
      }, []);

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
            {/* <div className="flex justify-between max-w-3xl w-full"> */}
            <div className="flex justify-between max-w-3xl w-full">
                <h2 className="mt-6 text-3xl font-bold text-white">
                    {teamDetail.name + " Members"}
                </h2>
                {/* <div className="mt-6 flex justify-end">
                    <a href={"/team/" + teamid + "/member/invite"}>
                    <button 
                        className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none"
                        
                        id = "invite"
                    >
                        + Invite
                    </button>
                    </a>
                </div> */}
                
            </div>
            <div className="border-b border-gray-300 max-w-3xl w-full my-8"> </div>
            
            <div className="flex justify-between max-w-3xl w-full">
                <div className="mb-4 text-2xl font-bold text-white">
                    Total Members : {teamMembers.length}
                </div>
                <AllMemberSearch memberlist={allId} teamid={teamid}/>
            </div>
            
            <div className="bg-gray-700 rounded-md flex flex-col max-w-3xl w-full">
                <div className="bg-gray-700 rounded-md flex justify-between max-w-3xl w-full text-white py-4 text-lg font-normal">
                    <p className="pl-6 w-48">Students</p>
                    <p className="px-2">Student ID</p>
                    <p className="px-2">Total Submit</p>
                    <p className="pr-16">Scores</p>
                    {/* <p>      </p> */}
                </div>
                <div className="flex flex-col w-full px-4">
                        {teamMembers.map(Title=>
                            <TeamMemberCard member={Title} teamid={teamid}/>
                        )}
                </div>
            </div>
        </div>
        </>
    );
}