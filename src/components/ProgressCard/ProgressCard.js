import { Typography, Box, Paper, Container } from "@mui/material";
import "./ProgressCard.css";
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import ProgressDonut from "../ProgressDonut/ProgressDonut";

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column-reverse" }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35, alignSelf: "flex-start" }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "2rem" }}>{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

const ProgressCard = ({ cardImage, cardTitle, value }) => {

    return (
        <Paper className="progress-card">
            <img src={cardImage} alt={cardTitle} className="card-image" />
            <Typography variant="subtitle1" className="card-title" sx={{
                position: "absolute",
                top: 0,
                right: 0,
                padding: 2,
            }}>{cardTitle}</Typography>
            <Container sx={{ width: '100%', position: "absolute", bottom: 0, left: 0, padding: "20px" }} className="progress-value">
                <ProgressDonut progressVal={value} />
            </Container>
        </Paper>
    );
}

export default ProgressCard;