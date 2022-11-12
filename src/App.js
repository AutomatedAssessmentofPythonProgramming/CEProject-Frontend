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
    <div className="min-h-full h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
    <div className="max-w-lg w-full">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Loginpage/>} />
            <Route path="/signup" element={<Signuppage/>} />
            <Route path="/home" element={<Homepage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;