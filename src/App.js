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
import Skills from './components/Skills/Skills';
import ProjectSection from './components/ProjectSection/ProjectSection';
import TechStacks from './components/TechStacks/TechStacks';

function App() {
  return (
    <div className="App">
      <AppRoutes>
        <ScrollSpy scrollThrottle={200}>
          <AppHeader />
          <AppContent />
          <Services />
          <ProjectSection />
          <Skills />
          <Socials />
          <AboutSection />
          <TechStacks />
          <Contacts phoneNumber="(+63)956-881-0654" email="archie.sevillano29@gmail.com" address="Las Piñas City NCR, Metro Manila PH" />
        </ScrollSpy>
      </AppRoutes>
    </div>
  );
}

export default App;
