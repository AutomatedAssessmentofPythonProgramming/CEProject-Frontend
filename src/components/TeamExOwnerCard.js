//For TeamPage.js


import { Link } from "react-router-dom";
import { useState } from 'react';
import Menu from "./Menu";

export default function TeamExOwnerCard({
    exercise,teamid
}){
    const handleOnClose =(e)=>{
        if(e.target.id === "container") setOpen(!open);
    }
    const [open,setOpen] = useState(false);
    const exercisemenu = ["Edit","Delete"]
    return(
        <>
        <div 
            className="flex justify-between bg-gray-700 my-4 rounded-md border border-gray-500"
            id='container'
            onClick={handleOnClose}
        >
            <div className="flex flex-col">
                <Link to={exercise.exerciseid} className="w-full py-4 px-2 text-white text-lg font-bold ">
                <span className="">
                    {exercise.exercisename} 
                </span>  
                </Link>   
                <span className="py-4 px-2 text-white text-base font-normal">
                    {exercise.description}
                </span>
            </div>     
            <div className="py-12 px-2 text-white text-lg font-normal">
                {exercise.duedate}
            </div>    
            <Link to={exercise.exerciseid+"/edit"} className="py-12 px-2 text-blue-600 hover:text-blue-700 text-lg font-medium ">
                <span className="">
                    Edit
                </span>  
            </Link>   
            <Link to={exercise.exerciseid+"/submit"} className="py-12 pl-12 text-blue-600 hover:text-blue-700 text-lg font-medium ">
            {/* <Link to={exercise.exerciseid} className="py-12 pl-12 text-blue-600 hover:text-blue-700 text-lg font-medium "> */}
                <span className="">
                    View Submission
                </span>  
            </Link>   
            <button   
                id="dropdownMenuIconHorizontalButton" 
                data-dropdown-toggle="dropdownDotsHorizontal" 
                class="items-center rounded-md inline-flex p-2 text-sm font-medium text-white bg-gray-700 focus:ring-gray-600" 
                type="button"
                onClick={()=> setOpen(!open)}> 
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>
            
        </div>
        <div id="dropdown" class={`flex flex-col items-end ${open ?'visible' : 'invisible max-h-0'}`}>
        <ul className={`text-sm w-32 border rounded-md border-gray-500`}>
            <li 
                className={`p-2 text-sm bg-gray-700 hover:bg-gray-800 text-white`}
                id="edit"
            >
                Edit
            </li>   
            <li 
                className={`p-2 text-sm bg-gray-700 hover:bg-gray-800 text-white`}
                id="delete"
            >
                Delete
            </li>   
        </ul>
          </div>
        </>
    )
}