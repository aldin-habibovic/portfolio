import './App.css';

import { useGet } from "restful-react";
import Footer from './footer/Footer';
import Header from './header/Header';
import EducationSection from './pages/education/Education-Section';
import ContactSection from './pages/contact/Contact-Section';
import PortfolioSection from './pages/portfolio/Portfolio-Section';
import ProfileSection from './pages/profile/Profile-Section';
import ReferenceSection from './pages/reference/Reference-Section';
import AboutSection from './pages/about/About-Section';
import SkillSection from './pages/skills/Skill-Section';
import { ProfileDTO } from "../FETCHERS";


function App() {
  const { data, loading } = useGet<ProfileDTO>({ path: '/read' });

  return (
    <>
      <Header></Header>
      <div className="page-content">
        <div>
          <ProfileSection></ProfileSection>
          {!loading && <AboutSection basicInfos={data?.basicInformation || {}} />}
          {!loading && <SkillSection skills={data?.skils || []} />}
          {!loading && <EducationSection educations={data?.educations || []} />}
          <ReferenceSection></ReferenceSection>
          <ContactSection></ContactSection>
          <PortfolioSection></PortfolioSection>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

