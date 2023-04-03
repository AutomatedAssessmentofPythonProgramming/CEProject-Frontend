import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate(); 

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email, password)
        let path = `/home`; 
        navigate(path);
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
         
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
            {/* {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            } */}
            <div className="my-5">
                <button
                    id = "google"
                    className="text-white bg-gray-900 hover:bg-gray-700 w-full border border-gray-400 font-medium rounded-md text-sm px-3 py-2 text-center items-center" 
                >
                Sign in with Google
                </button>
            </div>
            <div className = "my-5 text-gray-400 items-center flex flex-row justify-center">
                <hr className="h-0.5 w-full bg-gray-300 rounded-md"></hr>
                <p className="mx-4">or</p>
                <hr className="h-0.5 w-full bg-gray-300 rounded-md"></hr> 
            </div>
            <div className="my-5">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-grey-800 focus:border-grey-800 focus:placeholder-grey-800 focus:z-10 sm:text-sm"
                    id="email"
                    name="email"
                    required
                    placeholder="Email address"
                />
            </div>
            <div className="my-5">
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-grey-800 focus:border-grey-800 focus:placeholder-grey-800 focus:z-10 sm:text-sm"
                    id="password"
                    name="password"
                    required
                    placeholder="Password"
                />
            </div>
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}