import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signuppage from './pages/SignupPage';
import Loginpage from './pages/LoginPage';
import Homepage from './pages/HomePage';
import SettingPage from './pages/SettingPage';
import MagageTeamPage from './pages/ManageTeamPage';
import TeamPage from './pages/TeamPage';
import TeamMemberPage from './pages/TeamMemberPage';
import Navbar from './components/Navbar';
import TestPage from './pages/TestPage';

function App() {
  return (
    <>
     <Navbar/>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Loginpage/>} />
            <Route path="/login" element={<Loginpage/>} />
            <Route path="/signup" element={<Signuppage/>} />
            <Route path="/home" element={<Homepage/>} />
            <Route path="/setting" element={<SettingPage/>}/>
            <Route path="/manageteam" element={<MagageTeamPage/>}/>
            <Route path="/team" element={<TeamPage/>}></Route>
            <Route path="/team/:teamid" element= {<TeamPage/>}/>
            <Route path="/team/:teamid/member" element={<TeamMemberPage/>}/>
            
            <Route path="/test" element={<TestPage/>}/>
            {/* <Route path="/testcoding" element={} */}
        </Routes>
      </BrowserRouter>
    </>
 
  );
}

export default App;