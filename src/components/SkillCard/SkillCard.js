import "./SkillCard.css";
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
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


const SkillCard = ({ techName, value }) => {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        setProgress(value);
    }, []);

    return (
        <Box sx={{ width: '100%' }} className="skill-card">
            <Typography sx={{ fontWeight: "600", letterSpacing: "1px" }}>{techName}</Typography>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}

export default SkillCard;

