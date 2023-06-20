import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


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
                <Route path="/" />
            </Routes>
        </Router>
    );
}

export default AppRoutes;