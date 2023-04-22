import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import { useNavigate} from "react-router-dom";
import AuthService from '../services/Auth.Service';
import useFullPageLoader from '../hooks/useFullPageLoader';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [loader, showLoader, hideLoader] = useFullPageLoader();

    let navigate = useNavigate(); 

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        // let path = `/home`; 
        // navigate(path);
        AuthService.login(email,password)
        .then(()=>{
            showLoader()
            navigate('/home')
            window.location.reload();
        },
        error => {
            const resMessage = 
                (error.response &&
                    error.response.data && 
                    error.response.data.message) ||
                error.message ||
                error.toString();
            
            setLoading(false);
            setMessage(resMessage);
        }
        ).then(() => {
            hideLoader();
          });
    };

    //Handle Login API Integration here
    const authenticateUser = () =>{
         
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
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