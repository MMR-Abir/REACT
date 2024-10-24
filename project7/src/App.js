
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Wrapper from './components/Wrapper';
import Nopage from './pages/Nopage';


function App() {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Homepage />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
            );
}

            export default App;
