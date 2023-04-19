//For HomePage.js

import { Link } from "react-router-dom";
import { useState } from 'react';
import Menu from "./Menu";

export default function HomeCard({
    team
}){
    const handleOnClose =(e)=>{
        if(e.target.id === "container") setOpen(!open);
    }
    const [open,setOpen] = useState(false);
    const teammenu = ["Edit","Delete"]
    return(
        <>
        <div 
            className="flex justify-between text-white bg-gray-700 text-lg font-medium my-4 rounded-md"
            id='container'
            onClick={handleOnClose}
        >
            <Link to={"/team/" + team.teamid} className="w-full py-4 px-3">
            <span className="">
                {team.teamname} 
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
            <Menu menuname={teammenu}/>
          </div>
        </>
    )
}