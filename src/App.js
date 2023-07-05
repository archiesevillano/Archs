import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Socials from './components/Socials/Socials';
import AppRoutes from './AppRoutes';
import AboutSection from './components/AboutSection/AboutSection';
import Contacts from './components/Contacts/Contacts';
import Services from './components/Services/Services';
import ProjectSection from './components/ProjectSection/ProjectSection';
import TechStacks from './components/TechStacks/TechStacks';
import CvSection from './components/CVSection/CVSection';
import CertificateSection from './components/CertificateSection/CertificateSection';
import Hero from './components/Hero/Hero';
import ContactForm from './components/ContactForm/ContactForm';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import SnackBar from './SnackBar';

// modal box style <ContactForm/>
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  boxSizing: "border-box",
};

function App() {

  // Toggle function for Contact Form Visibility
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <AppRoutes>
        <SnackBar>
          <AppHeader />
          <Hero openContact={handleOpen} />
          <AboutSection />
          <Services />
          <Divider />
          <ProjectSection />
          <TechStacks />
          <CertificateSection />
          <CvSection />
          <Contacts phoneNumber="(+63)956-881-0654" email="archie.sevillano29@gmail.com" address="Las Piñas City NCR, Metro Manila PH" />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ margin: 0, boxSizing: "border-box!important" }}
          >
            <ContactForm boxStyle={style} closeAction={handleClose} />
          </Modal>
        </SnackBar>
      </AppRoutes>
    </div>
  );
}

export default App;
