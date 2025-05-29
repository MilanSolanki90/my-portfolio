import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Project from './project/Projects';
import Netflix from './pages/projects/Netflix';
import Ecommerce from './pages/projects/Ecommerce';
import Soomories from './pages/projects/Soomories';
import Pintola from './pages/projects/Pintola';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/netflix" element={<Netflix />} />
        <Route path="/projects/ecommerce" element={<Ecommerce />} />
        <Route path="/projects/soomories" element={<Soomories />} />
        <Route path="/projects/pintola" element={<Pintola />} />
      </Routes>
    </Router>
  );
}

export default App;
