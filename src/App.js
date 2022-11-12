import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signuppage from './pages/SignupPage';
import Loginpage from './pages/LoginPage';
import Homepage from './pages/HomePage';

function App() {
  return (
    <>
    
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Loginpage/>} />
            <Route path="/signup" element={<Signuppage/>} />
            <Route path="/home" element={<Homepage/>} />
        </Routes>
      </BrowserRouter>
    </>
 
  );
}

export default App;