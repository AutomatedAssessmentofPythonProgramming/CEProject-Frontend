//Searching Member

import React, { useState } from "react";
import { membercard } from "../constants/tempCards";

// const card=[]
// for(let i=0;i<membercard.length;i++){
//     console.log(membercard[i].studentid)
//     card.push(membercard[i].studentid)
// }

export default function AllMemberSearch({memberlist,teamid}){
    const [searchTerm, setSearchTerm] = useState("");
    // const [allId,setAllId]=useState([])
    // const memberid=[]
    // // for(let i=0;i<memberlist.length;i++){
    // //     // console.log(membercard[i].studentid)
    // //     memberid.push(memberlist[i].studentid)
    // // }
    // setAllId(memberid);
    // console.log(allId)
    const filteredData = memberlist.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleItemClick = (item) => {
      window.location.href = `/search/${encodeURIComponent(item)}`;
    };
    
    // console.log(teamid)

    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for member..."
          className="rounded-md mb-4 p-2"
        />
        {searchTerm && (
          <ul className="text-white bg-gray-700 border border-gray-300 rounded-md mb-2 pl-2">
            {filteredData.map((item, index) => (
              // <a href={`/team/${teamid}/member/${encodeURIComponent(item)}`} key={index} className="">
                <a href={`/team/${teamid}/member/${encodeURIComponent(item.split('/')[0])}`} key={index} className="">
                {/* <li onClick={() => handleItemClick(item)}>{item}</li> */}
                <li onClick={() => handleItemClick(item)}>{item.split('/')[1]}</li>
              </a>
            ))}
          </ul>
        )}
      </div>
    );
}