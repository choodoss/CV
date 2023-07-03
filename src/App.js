import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import InterestsAbout from './component/InterestsAbout/InterestsAbout';
import Exprians from './component/Exprians/Exprians';
import Education from './component/Education/Education';

const CvLayout = lazy(() => import("./component/CvLayout/CvLayout"));
const Home = lazy(() => import("./pages/Home/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe/AboutMe"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ContactMe = lazy(() => import("./pages/ContactMe/ContactMe"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<CvLayout />} >
        <Route index element={<Home />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="bio" />
          <Route path="interests" element={<InterestsAbout />} />
          <Route path="education" element={<Education />} />
          <Route path="exprians" element={<Exprians />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;