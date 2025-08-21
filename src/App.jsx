import './App.css';
import Navbar from './components/Navbar.jsx';
import Homep from './pages/homepage.jsx';
import AboutP from './pages/aboutpage.jsx';
import Skillp from './pages/skillpage.jsx';
import Contactp from './pages/contactpage.jsx';
import ProjectP from './pages/projectpage.jsx';
function App() {

  return (
    <>
      <Navbar />
      <Homep />
      <AboutP />
      <Skillp />
      <ProjectP />
      <Contactp />
    </>
  )
}

export default App
