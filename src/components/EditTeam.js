export default function EditTeam({open, onClose}){
    const handleOnClose =(e)=>{
        if(e.target.id === "container") onClose();
    }
    
    if(!open) return null

    return(
        <div 
            id='container'
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
        >
            <div className="bg-zinc-900 px-4 py-10 rounded max-w-2xl w-full border-2 border-gray-700">
            <h1 className="font-semibold text-2xl text-white ml-2 mb-5">
                Edit Team
            </h1>
            <div className="flex flex-col">
                <input
                type="text"
                className="border border-gray-700 p-2 rounded mx-2 mb-5"
                placeholder="Team Display name"
                />
                <input
                type="text"
                className="border border-gray-700 p-2 rounded mx-2 mb-5"
                placeholder="Team ID"
                />
                <div className="flex flex-row justify-start">
                <button className="bg-red-600 hover:bg-red-800 text-white rounded-md p-2 mx-2 mb-5">
                    Delete Team
                </button>
                </div>
            </div>
            <div className="flex flex-row justify-end mr-2">
                <button onClick={onClose} className="px-5 py-2 ml-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md">
                    Save
                </button>
                <button onClick={onClose} className="px-5 py-2 ml-2 bg-red-600 hover:bg-red-800 text-white rounded-md">
                    Cancel
                </button>
            </div>
            </div>
        </div>
    )
}