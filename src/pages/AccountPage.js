import Setting from "../components/Setting";
import AuthService from "../services/Auth.Service";

export default function AccountPage(){

    const profileDetail = AuthService.getUserProfile()

    return(
        <div className="min-h-screen h-max flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="max-w-lg w-full">
                <h className="text-white text-3xl font-bold"> Account</h>
                <div className="bg-gray-700 py-4 px-4 rounded-md mt-6">
                    <div className="flex flex-col">
                        <p className="text-white text-xl">Email</p>
                        <div className="bg-white text-black rounded-md p-2 my-2">Sample@mail.com</div>
                        <p className="text-white text-xl">First Name</p>
                        <div className="bg-white text-black rounded-md p-2 my-2">Myname</div>
                        <p className="text-white text-xl">Last Name</p>
                        <div className="bg-white text-black rounded-md p-2 my-2">Mylastname</div>
                        <p className="text-white text-xl">Student ID</p>
                        <div className="bg-white text-black rounded-md p-2 my-2">62012343</div>
                    </div>
                    <a href="setting">
                    <button
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-900 hover:bg-zinc-700 mt-4"
                    >
                        Edit Account
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )
}