import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Sendemail from './Pages/Sendemail';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/'          element={<Home/>}/>
      <Route path='/about'     element={<About/>}/>
      <Route path='/service'   element={<Service/>}/>
      <Route path='/project'   element={<Project/>}/>
      <Route path='/contact'   element={<Contact/>}/>
      <Route path='/sendemail' element={<Sendemail/>}/>
      
      
    </Routes>
    
   </Router>
  );
}

export default App;
