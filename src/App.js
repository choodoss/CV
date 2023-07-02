import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const CvLayout = lazy(() => import("./component/CvLayout/CvLayout"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<CvLayout />} >
        <Route index element={<Home />} />
        {/* <Route path="/move" element={<Move />} />
          <Route path="/move/:filmId" element={<MoveDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;


