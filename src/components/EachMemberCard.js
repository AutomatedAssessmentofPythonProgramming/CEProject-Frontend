//For EachMemberPage.js

import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import Menu from "./Menu";
import ViewCode from "../components/ViewCode";
import ExerciseService from "../services/Exercise.Service";

export default function EachMemberCard({
    memberexcard,teamid,stdid
}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () =>{
        setIsModalOpen(true);
        // console.log("open")
    };
    const closeModal = () => {
        setIsModalOpen(false);
        // console.log("close")
      };

    const date = new Date(memberexcard.dateSubmit);
    const dateDisplay = date.toString().substring(4, 21)
    const [exDetail,setExDetail] = useState([])
    useEffect(() => {
        ExerciseService.getExercise(memberexcard.exercise,teamid).then((res) => {
          setExDetail(res.data);
            // console.log(exDetail)
        });
      }, []);
    return(
        <>
        <div 
            className="flex justify-between bg-gray-700 my-4 rounded-md border border-gray-500"
            id='container'
        >
            <div className="flex flex-col w-32">
                
                <span className="w-full py-4 px-2 text-white text-lg font-bold">
                    {/* {memberexcard.exercise_title}  */}
                    {exDetail.title}
                </span>  
                <span className="py-4 px-2 text-white text-base font-normal">
                    {/* {memberexcard.exercise_instruction} */}
                    {exDetail.instruction}
                </span>
            </div>     
            <div className="flex flex-col pb-8">
            <div className="pt-12 px-2 text-white text-lg font-normal">
                {dateDisplay}
            </div>   
            {memberexcard.isLate === false?
                    <div className="px-2 text-green-600 text-lg font-normal">
                        Not late
                    </div> 
                    :
                    <div className="px-2 text-red-600 text-lg font-normal">
                        Late
                    </div>
                }
            </div> 
            <div className="py-12 pr-6 text-white text-lg font-normal">
               {memberexcard.score}
            </div>   
            <a onClick={()=>openModal()}>
            <div className="py-12 pr-12 text-blue-600 hover:text-blue-700 text-lg font-normal">
                View Code
            </div>  
            </a>
            {/* <button   
                id="dropdownMenuIconHorizontalButton" 
                data-dropdown-toggle="dropdownDotsHorizontal" 
                class="items-center rounded-md inline-flex p-2 text-sm font-medium text-white bg-gray-700 focus:ring-gray-600" 
                type="button"
                onClick={()=> setOpen(!open)}> 
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button> */}
            <ViewCode isModalOpen = {isModalOpen} closeModal = {closeModal} code = {memberexcard.code}/>
        </div>
        {/* <div id="dropdown" class={`flex flex-col items-end ${open ?'visible' : 'invisible max-h-0'}`}>
            <Menu menuname={exercisemenu}/>
          </div> */}
        </>
    )
}