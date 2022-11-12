import TeamCard from "../components/TeamCard"
import { tempcard } from "../constants/tempCards"
import Button from "../components/Button"

const card = tempcard

export default function Homepage(){
    return(
            <div className="min-h-full flex flex-col justify-start items-center h-screen py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
                <div className="flex justify-between max-w-2xl w-full mb-16">
                    <h2 className="mt-6 text-3xl font-bold text-white">
                        Your Teams
                    </h2>
                    <div className="mt-6 flex justify-end">
                        {/* <Button title={"+ New Team"}/> */}
                        <button className="h-10 px-3 mx-2 text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none">
                            + New Team
                        </button>
                        <button className="h-10 px-3 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
                            Manage Team
                        </button>
                    </div>
                </div>
                <div className="flex flex-col max-w-2xl w-full">
                    {card.map(Title=>
                            <TeamCard cardname={Title.cardname}/>
                        )}
                </div>
            </div>
   
    )
}