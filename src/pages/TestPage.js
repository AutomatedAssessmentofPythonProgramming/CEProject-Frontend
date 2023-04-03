import React, { useState } from "react";
import { membercard } from "../constants/tempCards";

const card=[]
for(let i=0;i<membercard.length;i++){
    console.log(membercard[i].studentid)
    card.push(membercard[i].studentid)
}
export default function TestPage(){
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = card.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleItemClick = (item) => {
      window.location.href = `/search/${encodeURIComponent(item)}`;
    };
  
    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        {searchTerm && (
          <ul>
            {filteredData.map((item, index) => (
              <a href={`/account/${item}`} key={index}>
                <li onClick={() => handleItemClick(item)}>{item}</li>
              </a>
            ))}
          </ul>
        )}
      </div>
    );
}