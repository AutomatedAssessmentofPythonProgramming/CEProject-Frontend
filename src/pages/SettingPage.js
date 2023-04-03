import Setting from "../components/Setting";

export default function SettingPage(){
    return(
        <div className="min-h-screen h-max flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="max-w-lg w-full">
                <h className="text-white text-3xl font-bold"> Account Setting </h>
                <div className="bg-gray-700 py-4 px-4 rounded-md mt-6">
                    <Setting/>
                </div>
            </div>
        </div>
    )
}