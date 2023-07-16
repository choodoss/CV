import { Route, Routes } from 'react-router-dom';
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
          <Route path="education" element={<Nothing />} />
          <Route path="exprians" element={<Nothing />} />
        </Route>
        <Route path="projects" element={< Projects />} />
        <Route path="contact-me" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;
