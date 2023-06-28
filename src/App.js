import logo from './logo.svg';
import './App.css';
import AppTheme, { ProvideTheme } from './AppTheme';
import { useContext } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppContent from './components/AppContent/AppContent';
import Socials from './components/Socials/Socials';
import AppRoutes from './AppRoutes';
import AboutSection from './components/AboutSection/AboutSection';
import Contacts from './components/Contacts/Contacts';
import ScrollSpy from 'react-ui-scrollspy';
import Services from './components/Services/Services';
import ProjectSection from './components/ProjectSection/ProjectSection';
import TechStacks from './components/TechStacks/TechStacks';
import CvSection from './components/CVSection/CVSection';
import CertificateSection from './components/CertificateSection/CertificateSection';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <AppRoutes>
        <ScrollSpy scrollThrottle={200}>
          <Hero />
          <Services />
          <CvSection />
          <ProjectSection />
          <AboutSection />
          <TechStacks />
          <CertificateSection />
          <Contacts phoneNumber="(+63)956-881-0654" email="archie.sevillano29@gmail.com" address="Las Piñas City NCR, Metro Manila PH" />
        </ScrollSpy>
      </AppRoutes>
    </div>
  );
}

export default App;
