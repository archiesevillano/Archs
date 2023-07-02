import { Container, Typography, Box, Button, useTheme } from "@mui/material";
import "./CVSection.css";
import { Download } from "@mui/icons-material";
import FileDownload from 'js-file-download';
import Axios from 'axios';

const CvSection = () => {

    const currentTheme = useTheme();
    const gdriveIcon = "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg";

    // download resume file from firebase
    const downloadResume = async () => {
        const response = await Axios.get("http://localhost:3001/file/download/resume.pdf", { responseType: 'blob' });
        const data = await response.data;
        console.log(data);
        FileDownload(data, "ACS_CV_DD.pdf"); //DD stands for Direct Download
    }

    //download file via google drive alternative link
    const alternativeDownload = async () => {
        const response = await Axios.get("http://localhost:3001/file/download/alternative-download-cv", { responseType: 'blob' });
        const data = await response.data;
        console.log(data);
        FileDownload(data, "ACS_CV_AD.pdf"); //AD stands for Direct Download
    }

    return (
        <Container sx={{ maxWidth: "100%!important", margin: 0, height: "70vh", display: "flex", flexDirection: { xl: "row", md: "row", xs: "column" }, justifyContent: "space-evenly", alignItems: "center", backgroundColor: currentTheme.palette.primary.main, background: "linear-gradient(13deg, rgba(233,94,59,1) 19%, rgba(236,166,148,1) 100%)" }} disableGutters>
            <Box sx={{ maxWidth: "500px", minWidth: "300px", flexGrow: { xl: 1, xs: 0 }, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "20px" }}>
                <Typography variant="subtitle1" sx={{ fontSize: "1.4rem", fontWeight: "bold", color: "black", opacity: "0.9", transform: "translateY(10px)" }}>Are you a recruiter?</Typography>
                <Typography variant="subtitle1" sx={{ fontSize: "3rem", fontWeight: "bold", lineHeight: "115%", margin: "10px 0" }}>Download my latest CV</Typography>
                <Typography variant="body1" fontSize="1rem" sx={{ color: "white" }}>
                    Review and obtain the latest version of my CV.  I am excited to discuss further how my skills can bring value to your organization.
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px", minWidth: "300px" }}>
                <Button variant="outlined" onClick={downloadResume} className="download__button" sx={{ width: "250px", borderColor: "white", color: "white", backgroundColor: "var(--secondary)" }}  >
                    <Download sx={{ marginRight: "15px", fontSize: "40px" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                        <Typography variant="body1" fontSize="0.7rem">Direct link</Typography>
                        <Typography variant="body1" fontSize="1.2rem" fontWeight="bold" sx={{ textTransform: "capitalize" }}>Download CV</Typography>
                    </Box>
                </Button>
                <Button variant="outlined" onClick={alternativeDownload} className="download__button" sx={{ width: "250px", backgroundColor: "rgb(236, 236, 236)" }}  >
                    <Box sx={{ marginRight: "15px", width: "16%", transform: "translateY(5px)" }}>
                        <img src={gdriveIcon} style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="Icon" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                        <Typography variant="body1" fontSize="0.7rem" color="secondary" >Alternative link</Typography>
                        <Typography variant="body1" fontSize="1.2rem" fontWeight="bold" sx={{ textTransform: "capitalize", color: "var(--secondary)" }}>Google Drive</Typography>
                    </Box>
                </Button>
            </Box >
        </Container >
    );
}

export default CvSection;