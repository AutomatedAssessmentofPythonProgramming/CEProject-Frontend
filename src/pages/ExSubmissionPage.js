
import { membersubmitcard,exercisecard } from "../constants/tempCards";
import { useEffect, useState } from "react";
import EditTeam from "../components/EditTeam";
import Addmember from "../components/Addmember";
import { useParams,Link } from "react-router-dom";
import ExSubmissionCard from "../components/ExSubmissionCard";
import AllMemberSearch from "../components/AllMemberSearch";
import ExerciseService from "../services/Exercise.Service";

export default function ExSubmissionPage(){
    const card = membersubmitcard[0].data
    // console.log(card)
    // const memberid=[]
    // for(let i=0;i<membersubmitcard.length;i++){

    //     memberid.push(membersubmitcard[i].studentid)
    // }
    const exdes = exercisecard[0]

    const params=useParams();
    const teamid = params.teamid
    const exid = params.exid
    // console.log(params)
    // console.log(memberid)
   
    const [exDetail,setExDetail] = useState([])
    const [cardDetail,setCardDetail] = useState([])
    const [allId,setAllId]=useState([])

    useEffect(() => {
        ExerciseService.getExercise(exid,teamid).then((res) => {
          setExDetail(res.data);
            // setCardDetail(card)
        });
        ExerciseService.getSubmissionlist(exid,teamid)
            .then((res)=>{
            // setExDetail(res.data.exericse);
            setCardDetail(res.data.data);
            const memberid = res.data.data.map((member) => member.user.pk+'/'+member.user.studentid);
            // console.log(res.data.data)
            setAllId(memberid)
            console.log(memberid)
        })
        .catch((error) => {
            console.log(error);
        });
      }, []);

    const date = new Date(exDetail.due);
    // console.log(date)
    const dateDisplay = date.toString().substring(4, 21)

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
                    {exDetail.title}
                </h2> 
                <div className="mt-6 flex justify-end">
                    <a href={'/team/' + teamid + '/'+ exid + '/edit'}>
                    <button 
                        className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none"
                        id = "editcode"
                    >
                        Edit Example Code
                    </button>
                    </a>
                </div>
            </div>
            <h2 className="mt-6 text-xl font-medium text-white max-w-3xl w-full">
                    {exDetail.instruction}
            </h2>
            <h2 className="mt-6 text-xl font-medium text-white max-w-3xl w-full">
                    {"Due Date: "+dateDisplay}
            </h2>
            <div className="border-b border-gray-300 max-w-3xl w-full my-8"> </div>
            
            <div className="flex justify-between max-w-3xl w-full">
                <div className="mb-4 text-2xl font-bold text-white">
                    Submission
                </div>
                {/* <AllMemberSearch memberlist={allId} teamid={teamid}/> */}
                {allId.length !== 0 ?
                    <AllMemberSearch memberlist={allId} teamid={teamid} />
                    :
                    <></>
                }

            </div>
            
            <div className="bg-gray-700 rounded-md flex flex-col max-w-3xl w-full">
                <div className="bg-gray-700 rounded-md flex justify-between max-w-3xl w-full text-white py-4 text-lg font-normal">
                    <p className="pl-6 pr-16">Students</p>
                    <p className="px-2">Scores</p>
                    <p className="px-2">Submitted Date</p>
                    <p className="pr-16">Submission</p>
                    {/* <p>      </p> */}
                </div>
                <div className="flex flex-col w-full px-4">
                        {cardDetail.map(Title=>
                            <ExSubmissionCard membersubmit={Title} teamid={teamid}/>
                        )}
                </div>
            </div>
        </div>
        </>
    );
}