import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import About from './pages/about/About';
import Education from './pages/education/Education';
import Profile from './pages/profile/Profile';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <>
      <Header></Header>
      <div className="page-content">
        <div>
          <Profile></Profile>
          <About></About>
          <Skills></Skills>
          <Education></Education>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
