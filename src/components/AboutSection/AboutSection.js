import { Box, Container, useTheme, Paper, Typography } from "@mui/material";
import "./AboutSection.css";
import { Link } from "react-router-dom";
const AboutSection = () => {

    const currentTheme = useTheme();

    // return (
    //     <Box sx={{ marginBottom: "50px", display: "flex", alignItems: "center", flexDirection: "column", position: "relative" }} id="about">
    //         <ul className="about-side-nav">
    //             <li><Link to="">P1</Link></li>
    //             <li><Link to="">P2</Link></li>
    //             <li><Link to="">P3</Link></li>
    //             <li className="about-line"><hr /></li>
    //             <li className="about-name">Archie Sevillano</li>
    //         </ul>
    //         <Container maxWidth="lg" sx={{ height: "630px", background: currentTheme.palette.background.paper, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "flex-start", flexWrap: "noWrap" }} disableGutters>
    //             <div className="image-container">
    //                 <img style={{ pointerEvents: "none" }} src={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/TechStacks%2Fmee.png?alt=media&token=2c05d600-9004-40dd-a650-3249086fe212"} className="archie" />
    //             </div>
    //             <Paper square sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flexGrow: "1", position: "relative" }}>
    //                 <Typography sx={{ position: "absolute", top: "0", right: "0", padding: "30px", fontFamily: "Josefin Sans", textTransform: "uppercase" }}>
    //                     About<br />
    //                     <Typography sx={{ fontSize: "2rem", lineHeight: "50%" }}>P1</Typography>
    //                 </Typography>
    //                 <Box maxWidth="sm" sx={{ paddingLeft: "20px", borderLeft: "5px solid var(--primary)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
    //                     <Typography variant="subtitle1" sx={{ fontSize: "3rem", margin: 0, lineHeight: "80%", fontWeight: 300 }}>I'm<br />
    //                         <Typography variant="subtitle1" sx={{ fontSize: "4.3rem", fontWeight: 300, margin: 0, lineHeight: "110%" }}>Archie<br /> Sevillano</Typography></Typography>
    //                     <Typography sx={{ maxWidth: "500px" }}>
    //                         I am a passionate and driven web developer with a strong focus on transforming ideas into engaging digital experiences. With a blend of creativity and technical expertise, I strive to bring imagination to life through well-crafted websites and applications.
    //                     </Typography>
    //                 </Box>
    //             </Paper>
    //         </Container>
    //         <Container maxWidth="lg" sx={{ height: "300px", background: currentTheme.palette.background.paper, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "flex-start", flexWrap: "noWrap" }} disableGutters>
    //             <div className="cover-container">
    //                 <Typography sx={{ position: "absolute", top: "0", right: "0", padding: "30px", fontFamily: "Josefin Sans", textTransform: "uppercase" }}>
    //                     About<br />
    //                     <Typography sx={{ fontSize: "2rem", lineHeight: "50%" }}>P2</Typography>
    //                 </Typography>
    //             </div>
    //             <Paper square sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flexGrow: "1", backgroundColor: currentTheme.palette.text.primary }}>
    //                 <Box maxWidth="sm" sx={{ paddingLeft: "20px", borderLeft: "5px solid var(--primary)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
    //                     <Typography sx={{ maxWidth: "500px", filter: "invert(1)" }}>
    //                         I am deeply passionate about web development and continuously seek opportunities to enhance my skills and stay updated with the latest industry trends. My journey in the field has equipped me with a solid foundation in front-end development, including proficiency in HTML, CSS, and JavaScript. I am also experienced in leveraging popular frameworks such as Bootstrap and have explored back-end development using PHP and Node.js.
    //                     </Typography>
    //                 </Box>
    //             </Paper>
    //         </Container>
    //         <Container maxWidth="lg" sx={{ height: "300px", background: currentTheme.palette.background.paper, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "flex-start", flexWrap: "noWrap" }} disableGutters>
    //             <div className="cover-container" style={{ backgroundColor: "var(--primary)" }}>
    //                 <Typography sx={{ position: "absolute", top: "0", right: "0", padding: "30px", fontFamily: "Josefin Sans", textTransform: "uppercase" }}>
    //                     About<br />
    //                     <Typography sx={{ fontSize: "2rem", lineHeight: "50%" }}>P3</Typography>
    //                 </Typography>
    //             </div>
    //             <Paper square sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flexGrow: "1" }}>
    //                 <Box maxWidth="sm" sx={{ paddingLeft: "20px", borderLeft: "5px solid var(--primary)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
    //                     <Typography sx={{ maxWidth: "500px" }}>
    //                         What sets me apart is my unwavering commitment to delivering excellence in every project I undertake. I approach each task with meticulous attention to detail and a strong eye for aesthetics, ensuring that the end result not only meets but exceeds expectations.
    //                     </Typography>
    //                 </Box>
    //             </Paper>
    //         </Container>
    //     </Box >
    // );

    return (
        <Container id="about" maxWidth="lg" sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: { lg: "row", sm: "column-reverse", xs: "column-reverse" } }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "30px", padding: "20px" }}>
                <Typography variant="subtitle1" maxWidth="sm" align="justify">
                    I am a passionate and driven web developer with a strong focus on transforming ideas into engaging digital experiences. With a blend of creativity and technical expertise, I strive to bring imagination to life through well-crafted websites and applications.
                </Typography>
                <Typography variant="subtitle1" maxWidth="sm" align="justify">
                    I am deeply passionate about web development and continuously seek opportunities to enhance my skills and stay updated with the latest industry trends. My journey in the field has equipped me with a solid foundation in front-end development, including proficiency in HTML, CSS, and JavaScript. I am also experienced in leveraging popular frameworks such as Bootstrap and have explored back-end development using PHP and Node.js.
                </Typography>
                <Typography variant="subtitle1" maxWidth="sm" align="justify">
                    What sets me apart is my unwavering commitment to delivering excellence in every project I undertake. I approach each task with meticulous attention to detail and a strong eye for aesthetics, ensuring that the end result not only meets but exceeds expectations.
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1" }}>
                    <Typography variant="body1" className="about__heading__word">about</Typography>
                </Box>
                <img src={"https://firebasestorage.googleapis.com/v0/b/archs-baedb.appspot.com/o/TechStacks%2Fmee.png?alt=media&token=2c05d600-9004-40dd-a650-3249086fe212"} className="archie__image" style={{ border: "8px solid white", pointerEvents: "none", maxWidth: "200px", height: "auto", objectFit: "contain", opacity: "0.7", transform: "rotate(5deg)", filter: "blur(3px)" }} />
            </Box>
        </Container>
    )
}

export default AboutSection;