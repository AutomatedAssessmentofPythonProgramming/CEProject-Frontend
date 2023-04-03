import Header from "../components/Header"
import Login from "../components/Login"
export default function Loginpage(){
    return(
        <div className="min-h-screen h-max flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-900">
            <div className="max-w-lg w-full">
                <div className="bg-white py-4 px-4 rounded-md">
                <Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                    />
                <Login/>
                </div>
            </div>
        </div>
    )
}