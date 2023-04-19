import Header from "../components/Header";
import Signup from "../components/Signup";

export default function Signuppage(){
    return(
        <div className="min-h-screen h-max flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="max-w-lg w-full">
                <div className="bg-white py-4 px-4 rounded-md">
                    <Header
                    heading="Signup to create an account"
                    paragraph="Already have an account? "
                    linkName="Login"
                    linkUrl="/login"
                    />
                    <Signup/>
                </div>
            </div>
        </div>
    )
}