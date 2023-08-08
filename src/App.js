import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import CvLayout from './component/CvLayout/CvLayout';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Bio from './component/Bio/Bio';
import InterestsAbout from "./component/InterestsAbout/InterestsAbout";
import Education from './component/Education/Education';
import Expirians from './component/Expirians/Expirians';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CvLayout />} >
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />}>
          <Route path="bio" element={<Bio />} />
          <Route path="interests" element={<InterestsAbout />} />
          <Route path="education" element={<Education />} />
          <Route path="expirians" element={<Expirians />} />
        </Route>
        <Route path="projects" element={< Projects />} />
        <Route path="contact-me" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;
