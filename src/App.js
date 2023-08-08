import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import CvLayout from './component/CvLayout/CvLayout';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Nothing from './component/Nothing/Nothing';
import Bio from './component/Bio/Bio';
import InterestsAbout from "./component/InterestsAbout/InterestsAbout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CvLayout />} >
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />}>
          <Route path="bio" element={<Bio />} />
          <Route path="interests" element={<InterestsAbout />} />
          <Route path="education" element={<Nothing />} />
          <Route path="expirians" element={<Nothing />} />
        </Route>
        <Route path="projects" element={< Projects />} />
        <Route path="contact-me" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;
