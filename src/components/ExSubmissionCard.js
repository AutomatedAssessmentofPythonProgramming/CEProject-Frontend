//For ExSubmissionPage

import { Link } from "react-router-dom";
import { useState } from 'react';
import Menu from "./Menu";
import ReactModal from "react-modal";
import ViewCode from "./ViewCode";
export default function ExSubmissionCard({
   membersubmit,teamid
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
      const date = new Date(membersubmit.dateSubmit);
      const dateDisplay = date.toString().substring(4, 21)

    return(
        <>
        <div 
            className="flex justify-between bg-gray-700 my-4 rounded-md border border-gray-500"
            id='container'
            // onClick={handleOnClose}
        >
            <div className="flex flex-col w-32">
                <Link 
                    to={"/team/" + teamid+"/member/" + membersubmit.user.studentid} 
                    className="w-full py-4 px-2 text-white text-lg font-semibold "
                >
                <span className="">
                    {membersubmit.user.firstname} 
                </span>  
                </Link>   
                <span className="py-4 px-2 text-white text-base font-normal">
                    {membersubmit.user.email}
                </span>
            </div>     
            <div className="py-12 px-2 text-white text-lg font-normal">
                {membersubmit.user.studentid}62010713
            </div>    
            <div className="py-12 px-2 text-white text-lg font-normal">
                {dateDisplay}
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
            <ViewCode isModalOpen = {isModalOpen} closeModal = {closeModal} code = {membersubmit.code}/>
            {/* <div className="text-white"> {isModalOpen? 'ads' : 'asdadasda'}</div> */}
        </div>
        {/* <div id="dropdown" class={`flex flex-col items-end ${open ?'visible' : 'invisible max-h-0'}`}>
            <Menu menuname={exercisemenu}/>
          </div> */}
        
        
        </>
    )
}