import { Container, Divider, Paper, Typography, Box, Tooltip, useMediaQuery } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DownloadIcon from '@mui/icons-material/Download';
import LinkIcon from '@mui/icons-material/Link';
import { IconButton } from "@mui/material";
import Axios from 'axios';
import "./CertificateCard.css";

const CertificateCard = ({ snapShotSource, issuedDate, title, issuerImage, issuerName }) => {

    const medq = useMediaQuery('(max-width: 400px)');

    return (
        <Paper square className="certificateCard" sx={{ marginBottom: medq ? "130px" : "100px", width: medq ? "300px" : "350px" }}>
            <span className="date-issued">{issuedDate}</span>
            <img src={snapShotSource} alt="media" className="certificate__image" />
            <div className="__overlay">
                <Tooltip title="View">
                    <IconButton aria-label="View Image" className="overlay__btns" style={{ transitionDelay: "0.2s" }}>
                        <RemoveRedEyeIcon sx={{ color: "white" }} />
                    </IconButton>
                </Tooltip>
            </div>
            <div className="certificateCard__details" style={{ bottom: medq ? "-105px" : "-90px" }}>
                <div className="issuer__container">
                    <img src={issuerImage} alt="media" style={{ borderRadius: "50%", width: "50px", height: "50px" }} />
                </div>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                    <Typography fontWeight="Bold" variant="subtitle1">{title}</Typography>
                    <Typography variant="subtitle1" sx={{ fontSize: "0.8rem" }}>{issuerName}</Typography>
                </Box>
            </div>
        </Paper>
    );
}

export default CertificateCard;