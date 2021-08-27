import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import About, { IAboutProps } from './pages/about/About';
import Contact from './pages/contact/Contact';
import Education from './pages/education/Education';
import Portfolio from './pages/portfolio/Portfolio';
import Profile from './pages/profile/Profile';
import Reference from './pages/reference/Reference';
import Skills from './pages/skills/Skills';

function App() {
  const about: IAboutProps = {aboutMe: '', age: 30, email: '', phone: '', adress: '', language: []};

  return (
    <>
      <Header></Header>
      <div className="page-content">
        <div>
          <Profile></Profile>
          <About about={about} />
          <Skills></Skills>
          <Education></Education>
          <Reference></Reference>
          <Contact></Contact>
          <Portfolio></Portfolio>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
