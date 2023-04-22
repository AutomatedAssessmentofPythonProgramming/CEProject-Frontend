//For TeamPage.js


import { Link } from "react-router-dom";
import { useState } from 'react';
import Menu from "./Menu";

export default function TeamExMemberCard({
    exercise,teamid
}){
    const[isDone,setIsDone] = useState(exercise.exercise.isDone);
    const [dueDate,time] = exercise.dueTime.split("T")
    const dueTime = time.split(".")[0]
    return(
        <>
        <div className=" rounded-md border border-gray-500 my-4">
        <div 
            className="flex justify-between bg-gray-700 my-2 mx-4"
            id='container'
        >
            <div className="flex flex-col">
                <Link to={exercise.exerciseid} className="w-full py-4 px-2 text-white text-lg font-bold ">
                <span className="">
                    {exercise.exercise.title} 
                </span>  
                </Link>   
                <span className="py-4 px-2 text-white text-base font-normal">
                    {exercise.exercise.instruction}
                </span>
            </div>     
            <div className="py-12 px-2 text-white text-lg font-normal">
                <p>{dueDate + ' ' + dueTime}</p>
                
            </div> 
            {isDone == true ? (
                <div className="my-12 mr-8 p-2 text-white text-lg font-normal rounded-md bg-green-700">
                    Complete
                </div>
            ) : (
                <div className="my-12 mr-6 p-2 text-white text-lg font-normal rounded-md bg-red-700">
                    InComplete
                </div>
            )}
        </div>
        </div>
        </>
    )
}