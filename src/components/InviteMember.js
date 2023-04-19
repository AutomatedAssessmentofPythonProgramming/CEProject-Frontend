// import React, { useState } from 'react';
// import { useParams,useHistory } from "react-router-dom";


// export default function InviteMember() {
//     const params=useParams();
//     const teamid = params.teamid
//   const [emails, setEmails] = useState('');
//   //const history = useHistory();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // do something with the form data, e.g. submit to a server
//     const emailList = emails.split(' ');
//     console.log(emailList)
//     // window.location.href= `/team/${encodeURIComponent(teamid)}/member/invite`
//   };

//   const handleEmailChange = (event) => {
//     setEmails(event.target.value);
// };

//   return (
//     <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
//         <div className="mt-6 flex justify-start max-w-md w-full mb-8">
//                 <a href={"/team/" + teamid}>
//                     <button 
//                         className="h-10 px-3 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
//                         id = "invite"
//                     >
//                         &lt; Back to Team
//                     </button>
//                 </a>
//             </div>
//       <div className='border border-gray-300 max-w-md w-full rounded-md px-4'>
//       <h1 className="font-semibold text-2xl text-white my-4">
//         Add member
//       </h1>
//       <p className="font-normal text-lg text-white mb-2">
//         Email
//         </p>
//       <form onSubmit={handleSubmit}>
//         <textarea
//             id="emails-input"
//             value={emails}
//             onChange={handleEmailChange}
//             className='rounded-md p-2 w-full'
//             rows="4"
//             required
//         />
//         <div className="flex flex-row justify-end my-4">
//             <button type="submit" className="px-5 py-2 ml-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md">
//                 Add Members
//             </button>
//         </div>
//       </form>
//       </div>
      
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

export default function InviteMember() {
  const params = useParams();
  const teamid = params.teamid;
  const [emails, setEmails] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Split the input into individual email addresses
    const emailList = emails.trim().split(/\s+/);

    // Check if each email address is valid
    for (const email of emailList) {
      if (!validateEmail(email)) {
        setErrorMessage(`Invalid email address: ${email}`);
        return;
      }
    }

    // If all email addresses are valid, proceed with the submission
    console.log(emailList);
    window.location.href = `/team/${encodeURIComponent(teamid)}/member/invite`;
  };

  const handleEmailChange = (event) => {
    setEmails(event.target.value);
  };

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="min-h-screen h-max flex flex-col justify-start items-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="mt-6 flex justify-start max-w-md w-full mb-8">
        <a href={"/team/" + teamid + "/member"}>
          <button
            className="h-10 px-3 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
            id="invite"
          >
            &lt; Back
          </button>
        </a>
      </div>
      <div className="border border-gray-300 max-w-md w-full rounded-md px-4">
        <h1 className="font-semibold text-2xl text-white my-4">Invite member</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="font-normal text-lg text-white mb-2">Email addresses:</label>
            <textarea
              className="rounded-md p-2 w-full"
              value={emails}
              onChange={handleEmailChange}
              required
            ></textarea>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
          <div className="flex flex-row justify-end my-4">
            <button type="submit" className="px-5 py-2 ml-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md">
              Invite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
