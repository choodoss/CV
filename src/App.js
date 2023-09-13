import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import CvLayout from './component/CvLayout/CvLayout';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Bio from './component/Bio/Bio';
import InterestsAbout from "./component/InterestsAbout/InterestsAbout";
import Education from './component/Education/Education';
import Experience from './component/Experience/Experience';
import FilteredProjects from './component/FilteredProjects/FilteredProjects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CvLayout />} >
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />}>
          <Route path="bio" element={<Bio />} />
          <Route path="interests" element={<InterestsAbout />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
        </Route>
        <Route path="projects" element={< Projects />} >
          <Route index element={<FilteredProjects />} />
          <Route path=":filters" element={<FilteredProjects />} />
        </Route>
        <Route path="contact-me" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}
export default App;
