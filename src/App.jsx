
import './App.css';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import AboutPage from './pages/AboutPage';
import AdmissionPage from './pages/AdmissionPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';
import './styles/pages.css';
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes, UNSAFE_withHydrateFallbackProps } from 'react-router-dom';
const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    
    <div>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Jeeya Jitendra Patil"
          studentPhotoUrl="/images/jeeya-img.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/courses" element={<CoursesPage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/admission" element={<AdmissionPage/>}></Route>
        </Routes>
        <ChatbotComponent/>
      </Router>
    </div>
  )
}
export default App;