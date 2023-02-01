export default function Button({
    title,
    color
}){
    return(
        <button className="h-10 px-3 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
            {title}
        </button>
    )
}