import { useState } from 'react';
import { settingFields } from "../constants/formFields"
import FormAction from './FormAction';
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const fields=settingFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Setting(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({ mode: "onTouched" });
      const [emailReg, setEmailReg] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [studentid,setStudentid] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [term, setTerm] = useState(false);
  const [open,setOpen] = useState(false);
  const [selected,setSelected] = useState("");

  const password = watch("password");
    const onSubmit=(e)=>{
        
        createAccount()
      }
    //handle Signup API Integration here
    const createAccount=()=>{

    }
    return(
        <div className="">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
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

          {selected == "Student" ? 
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
          : <></>}
          
          <div className="my-5">
            <input
                type="password"
                className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-grey-800 focus:border-grey-800 focus:placeholder-grey-800 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                placeholder="Password"
                required
                {...register("password", {
                  minLength: {
                    value: 4,
                    message: "Passwords must be at least 4 characters",
                  },
                })}
                onChange={(e) => setPasswordReg(e.target.value)}
            />
            {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
          </div>
          <div className="my-5">
            <input
              type="password"
              className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-grey-800 focus:border-grey-800 focus:placeholder-grey-800 focus:z-10 sm:text-sm"
              id="confirmpassword"
              name="confirmpassword"
              required
              placeholder="Confirm password"
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "Must be the same as your passwords",
              })}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            {errors.confirmPassword && (
                <span className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
          </div>
          
          <FormAction handleSubmit={handleSubmit(onSubmit)} text="Save Changes" />
        </div>

         

      </form>
      </div>
    )
}