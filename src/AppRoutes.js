import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Contacts from "./components/Contacts/Contacts";


export const sections = [
    {
        name: "Get Started",
        path: "/#get-started",
        child: <Hero />,
    },
    {
        name: "Services",
        path: "/#services",
        child: <Services />,
    },
    {
        name: "Projects",
        path: "/#projects",
        child: <ProjectSection />,
    },
    {
        name: "Contacts",
        path: "/#contacts",
        child: <Contacts />,
    },
];

export const socialLinks = [
    {
        path: "https://www.linkedin.com/in/archie-sevillano-24118227a/",
        name: "LinkedIn",
        icon: <LinkedInIcon sx={{ fontSize: "30px" }} />,
    },
    {
        path: "https://github.com/archiesevillano",
        name: "Github",
        icon: <GitHubIcon sx={{ fontSize: "30px" }} />,
    },
    {
        path: "https://www.facebook.com/profile.php?id=100090274135612",
        name: "Facebook",
        icon: <FacebookIcon sx={{ fontSize: "30px" }} />,
    },
];

const AppRoutes = ({ children }) => {
    return (
        <Router>
            {children}
            <Routes>
                {sections.map(item => <Route key={item?.path + "route"} exact path={item?.path} component={item?.child} />)}
            </Routes>
        </Router>
    );
}

export default AppRoutes;