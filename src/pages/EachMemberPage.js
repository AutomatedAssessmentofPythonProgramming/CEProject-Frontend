import EachMemberCard from "../components/EachMemberCard";
import { memberexercisecard } from "../constants/tempCards";
import { useEffect, useState } from "react";
import EditTeam from "../components/EditTeam";
import { useParams,useLocation } from "react-router-dom";
import ExerciseService from "../services/Exercise.Service";

const card = memberexercisecard

export default function EachMemberPage(){
    const params=useParams();
    const stdid = params.stdid
    const teamid=params.teamid
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const [memberDetail,setMemberDetail] = useState([])
    const [cardDetail,setCardDetail] = useState([])
    const location = useLocation()
    // const {member} = location.state;
    const handleOnClose = () => setIsOpen(false)
    // console.log(member)
    useEffect(() => {
        // ExerciseService.getExercise(exid,teamid).then((res) => {
        //   setExDetail(res.data);
        //     // console.log(exDetail)
        // });
        ExerciseService.getUserSubmission(teamid,stdid)
        .then((res)=>{
            setMemberDetail(res.submissions[0])
            // setMemberDetail(res.user)
            setCardDetail(res.submissions)
        })
      }, []);

    const handleClick=(e)=>{
        
        setIsOpen(!isOpen)
        console.log(!isOpen)
    }
    
    return(
        
        <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="mt-6 flex justify-start max-w-3xl w-full">
                <a href={"/team/" + teamid + "/member"}>
                    <button 
                        className="h-10 px-3 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                        id = "invite"
                    >
                        &lt; Back
                    </button>
                </a>
            </div>
            <div className="max-w-3xl w-full">
                <p className="mt-6 text-3xl font-bold text-white">
                    {memberDetail.user_firstname +' '+memberDetail.user_lastname}
                    {/* {memberDetail.firstname +' '+memberDetail.lastname} */}
                </p>
                <p className="mt-6 text-xl font-normal text-white">
                    {memberDetail.studentid}
                </p>
                {/* <div className="mt-6 flex justify-end">
                    <button 
                        className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-800 focus:outline-none"
                      
                        id = "EditTeam"
                    >
                        Delete
                    </button>
                </div> */}
                
            </div>
            <div className="border-b border-gray-300 max-w-3xl w-full my-8"> </div>
            
            <div className="my-4 text-2xl font-bold text-white w-full max-w-3xl">
                 Exercises
            </div>
            <div className="bg-gray-700 rounded-md flex flex-col max-w-3xl w-full">
                <div className="bg-gray-700 rounded-md flex justify-between max-w-3xl w-full text-white py-4 text-lg font-normal">
                    <p className="pl-6 pr-16 w-32">Title</p>
                    <p className="px-2 pl-10">Submitted Date</p>
                    <p className="px-2">Scores</p>
                    <p className="pr-16">Submission</p>
                    {/* <p>      </p> */}
                </div>
                <div className="flex flex-col w-full px-4">
                        {cardDetail.map(Title=>
                            <EachMemberCard memberexcard={Title} teamid={teamid} stdid={stdid}/>
                        )}
                </div>
            </div>
        </div>
        
    );
}