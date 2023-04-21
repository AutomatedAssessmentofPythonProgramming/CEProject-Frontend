import React from 'react';
import { useState } from 'react';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return(<nav className="bg-gray-700">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex-shrink-0">
        <a href={"/home"} className="text-white font-medium text-base">
        CEPYTHON
        </a>
      </div>
      <div className="-mr-2 flex md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block mt-4 md:mt-0`}
      >
        <div className="ml-4 flex items-center md:ml-6">
        <a
            href="/home"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/account"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium"
          >
            Setting
          </a>
          <a
            href="/login"
            className="block mt-4 md:inline-block md:mt-0 text-red-500 hover:text-red-700 px-3 py-2 rounded-md text-base font-medium"
            
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
);
//   return (
//     <nav className="bg-gray-800">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <a href="/" className="text-white font-bold text-xl">
//               My Logo
//             </a>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <a
//                 href="/"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="/about"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 About
//               </a>
//               <a
//                 href="/contact"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
};
