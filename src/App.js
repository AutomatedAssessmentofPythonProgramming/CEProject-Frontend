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
import TestCodingPage from './pages/TestCodingPage';
import NewExercise from './components/NewExercise';
import NewTeam from './components/NewTeam';
import ExSubmissionPage from './pages/ExSubmissionPage';
import EachMemberPage from './pages/EachMemberPage';
import EditExercisePage from './pages/EditExercisePage';
import EditTeam from './components/EditTeam';
import InviteMember from './components/InviteMember';

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
            <Route path="/createteam" element={<NewTeam/>}/>
            <Route path="/manageteam" element={<MagageTeamPage/>}/>
            <Route path="/team" element={<TeamPage/>}></Route>
            <Route path="/team/:teamid" element= {<TeamPage/>}/>
            <Route path="/team/:teamid/edit" element= {<EditTeam/>}/>
            <Route path="/team/:teamid/member" element={<TeamMemberPage/>}/>
            <Route path="/team/:teamid/member/invite" element={<InviteMember/>}/>
            <Route path="/team/:teamid/member/:stdid" element={<EachMemberPage/>}/>
            <Route path="/team/:teamid/createex" element={<NewExercise/>}/>
            <Route path="/team/:teamid/:exid/submit" element={<ExSubmissionPage/>}/>
            <Route path="/team/:teamid/:exid/edit" element={<EditExercisePage/>}/>
            <Route path="/test" element={<TestPage/>}/>
            {/* <Route path="/testcoding" element={<TestCodingPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
 
  );
}

export default App;