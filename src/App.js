
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
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
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import SnackBar from './SnackBar';
import Axios from 'axios';

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
  const [loaded, setLoad] = React.useState(false);

  const checkServer = async () => {
    const response = await Axios.get(process.env.REACT_APP_SERVER);

    return response;
  }

  const loaderDialog = <div className="loaderDialog">
    <div className="three-body">
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
    </div>
  </div>

  React.useEffect(() => {
    setTimeout(async () => {
      try {
        const result = await checkServer();
        setLoad(result.data);
      }
      catch (error) {
        console.log(error);
      }

    }, 5000);
  }, []);

  return (
    <div className="App">
      {
        loaded === false ? <div className="popup" style={{ position: "fixed", transform: "translate(-50%, -50%)", top: "50%", left: "50%", zIndex: 10, background: "#f2f2f2", borderRadius: "15px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
          <h1>New Version of Portfolio has just been released</h1>
          <p>Go visit my new portfolio at: <a style={{ color: "#28a1e7" }} href="https://archs-portfolio.vercel.app/">https://archs-portfolio.vercel.app/</a></p>
        </div> : <></>
      }
      {
        loaded ? <AppRoutes>
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
          : loaderDialog
      }
    </div>
  );
}

export default App;
