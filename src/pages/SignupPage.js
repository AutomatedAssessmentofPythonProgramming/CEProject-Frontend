import Header from "../components/Header";
import Signup from "../components/Signup";

export default function Signuppage(){
    return(
        <div className="bg-white py-4 px-4 rounded-md">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </div>
    )
}