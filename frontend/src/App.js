import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ShareThoughts from './components/ShareThoughts';
import Profile from './components/Profile';
import TherapySession from './components/TherapySession';
import OurTeam from './components/OurTeam';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/sharethoughts" element={<ShareThoughts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/therapysession" element={<TherapySession />} />
          <Route path="/ourteam" element={<OurTeam />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;