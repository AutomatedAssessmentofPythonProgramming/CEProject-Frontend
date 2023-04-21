import { useState } from 'react';
import { settingFields } from "../constants/formFields"
import FormAction from './FormAction';
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthService from '../services/Auth.Service';

const fields=settingFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Setting(){
  const {
      register,
      formState: { errors },
    //} = useForm({ mode: "onTouched" });
    } = useForm();
  const [emailReg, setEmailReg] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [studentid,setStudentid] = useState("");

  const [term, setTerm] = useState(false);
  const [open,setOpen] = useState(false);
  const [selected,setSelected] = useState("");

  const handleSubmit=(event)=>{
      event.preventDefault();
      console.log(emailReg.split("@")[0],emailReg,name,surname,studentid)
      AuthService.editUserProfile(emailReg.split("@")[0],emailReg,name,surname,studentid)
    };
  //handle Signup API Integration here
  return(
    <div className="min-h-screen h-max flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-lg w-full">
      <p className="text-white text-3xl font-bold">Edit Account</p>
      <form onSubmit={handleSubmit} className="bg-gray-700 py-4 px-4 rounded-md mt-8 space-y-6">
      <div className="max-w-xl">
        <div className="my-5">
          <input
            onChange={(e) => setEmailReg(e.target.value)}
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
            type="text"
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-grey-800 focus:border-grey-800 focus:placeholder-grey-800 focus:z-10 sm:text-sm"
            id="name"
            name="name"
            required
            placeholder="First name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <input
            type="text"
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-grey-800 focus:border-grey-800 focus:placeholder-grey-800 focus:z-10 sm:text-sm"
            id="surname"
            name="surname"
            required
            placeholder="Last name"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
          <div className="my-5">
            <input
              type="number"
              className={`rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-grey-800 focus:border-grey-800 focus:placeholder-grey-800 focus:z-10 sm:text-sm`}
              id="studentid"
              name="studentid"
              required
              placeholder="Student ID"
              {...register("studentid", {
                minLength: {
                  value: 8,
                  message: "Student ID must be 8 characters",
                },
                maxLength: {
                  value: 8,
                  message: "Student ID must be 8 characters",
                },
              })}
              onChange={(e) => setStudentid(e.target.value)}
            />
            {errors.studentid && (
                <span className="text-sm text-red-500">
                  {errors.studentid.message}
                </span>
              )}
          </div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-900 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-10"
          //onSubmit={handleSubmit}
        >
            Save Changes
        </button>
      </div>

        

      </form>
      </div>
    </div>
  )
}