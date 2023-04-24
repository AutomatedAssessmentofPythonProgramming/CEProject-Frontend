import HomeCard from "../components/HomeCard";
import { tempcard } from "../constants/tempCards";
import { useEffect, useState } from "react";
import NewTeam from "../components/NewTeam";
import Navbar from "../components/Navbar";
import TeamService from "../services/Team.Service";
import AuthService from "../services/Auth.Service";
import React from "react";

const card = tempcard;

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(false);
  const [allTeams, setAllTeams] = useState([]);
  useEffect(() => {
    TeamService.getAllTeam().then((res) => {
      setAllTeams(res.data.teams);
      // console.log(allTeams)
    });
  }, []);

  const handleDelete = async (pk) => {
    console.log("delete team" + pk);
    setAllTeams(allTeams.filter((item) => item.pk !== pk))
    await TeamService.deleteTeam(pk);
    // window.location.reload()
  };

  const userProfile = AuthService.getUserProfile();
  console.log(userProfile);
  // const [isOpen,setIsOpen] = useState(false);
  // const handleOnClose = () => setIsOpen(false)

  // const handleClick=(e)=>{

  //     setIsOpen(!isOpen)
  //     console.log(!isOpen)
  // }
  // console.log(localStorage.getItem("user"))

  return (
    <>
      <div>
        <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
          <div className="flex justify-between max-w-3xl w-full mb-16">
            <h2 className="mt-6 text-3xl font-bold text-white">Your Teams</h2>
            <div className="mt-6 flex justify-end">
              <a href="/createteam">
                <button
                  className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none"
                  id="NewTeam"
                >
                  + New Team
                </button>
              </a>
              {/* <a href="/manageteam">
                        <button 
                            className="h-10 px-3 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                            id = "ManageTeam"
                        >
                            Manage Team
                        </button>
                        </a> */}
              <a href="/jointeam">
                <button
                  className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none"
                  id="JoinTeam"
                >
                  + Join Team
                </button>
              </a>
            </div>
          </div>
          {/* <NewTeam onClose={handleOnClose} open={isOpen}/> */}
          <div className="flex flex-col max-w-3xl w-full">
            {allTeams.map((team) => (
              <HomeCard team={team} onDelete={handleDelete} />
            ))}
            {/* {JSON.stringify(allTeam)} */}
          </div>
        </div>
      </div>
    </>
  );
}
