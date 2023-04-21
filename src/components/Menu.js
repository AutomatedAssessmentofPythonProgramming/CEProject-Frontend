export default function Menu({menuname}){

    return(
        <ul className={`text-sm w-32 border rounded-md border-gray-500`}>
            {menuname?.map(Title=>
                // {Title === "Delete"? 
                // <li 
                // className="p-2 text-sm bg-gray-700 hover:bg-gray-800 text-red-500"
                // id={Title}
                // >
                //     {Title}
                // </li>
                // :
                // <li 
                // className="p-2 text-sm bg-gray-700 hover:bg-gray-800 text-white"
                // id={Title}
                // >
                //     {Title}
                // </li>
                // }    
                //<a href="/">
                <li 
                    className={`p-2 text-sm bg-gray-700 hover:bg-gray-800 text-white`}
                    id={Title}
                >
                    {Title}
                </li>   
                //</a>
            )}
            
        </ul>
    )

}