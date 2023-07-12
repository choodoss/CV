import { Route, Routes } from 'react-router-dom';
import InterestsAbout from './component/InterestsAbout/InterestsAbout';
import Exprians from './component/Exprians/Exprians';
import Education from './component/Education/Education';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import CvLayout from './component/CvLayout/CvLayout';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Nothing from './component/Nothing/Nothing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CvLayout />} >
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />}>
          <Route path="bio" element={<Nothing />} />
          <Route path="interests" element={<Nothing />} />
          <Route path="education" element={<Education />}>
            <Route path="school" element={<Nothing />} />
            <Route path="college" element={<Nothing />} />
            <Route path="academy" element={<Nothing />} />
            <Route path="courses" element={<Nothing />} />
          </Route>
          <Route path="exprians" element={<Exprians />} />
        </Route>
        <Route path="projects" element={< Projects />} />
        <Route path="contact-me" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;
