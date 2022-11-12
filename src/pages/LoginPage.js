import Header from "../components/Header"
import Login from "../components/Login"
export default function Loginpage(){
    return(
        <div className="bg-white py-4 px-4 rounded-md">
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
        </div>
    )
}