//For ManageTeamPage.js

import { Link } from "react-router-dom";
import { useState } from 'react';
import Menu from "./Menu";

export default function TeammanageCard({
    team
}){
    // const handleOnClose =(e)=>{
    //     if(e.target.id === "container") setOpen(!open);
    // }
   
    return(
        <>
        <div 
            className="flex justify-between text-white bg-gray-700 text-lg font-normal my-4 rounded-md border border-gray-500"
            id='container'
            // onClick={handleOnClose}
        >
            <Link to={"/team/" + team.teamid} className="py-4 px-4 max-w-xs w-full">
            <span className="">
                {team.teamname} 
            </span>  
            </Link>            
            <p className="py-4 px-12">Total Student : {team.teamstudent}</p>
        </div>
        
        </>
    )
}