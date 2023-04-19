export default function Addmember({open, onClose}){
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
            <h1 className="font-semibold text-2xl text-white ml-2 mb-4">
                Add member
            </h1>
            <p className="font-normal text-lg text-white ml-2 mb-2">
                Email
            </p>
            <div className="p-2">
            <textarea class="w-full h-24 resize-none rounded-md"></textarea>
            </div>
            <div className="flex flex-row justify-end mr-2">
                <button onClick={onClose} className="px-5 py-2 ml-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md">
                    Invite
                </button>
                <button onClick={onClose} className="px-5 py-2 ml-2 bg-red-600 hover:bg-red-800 text-white rounded-md">
                    Cancel
                </button>
            </div>
            </div>
        </div>
    )
}