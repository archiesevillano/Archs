import { Box, Typography } from "@mui/material";
import "./Brand.css";

const Brand = () => {
    const brandText = process.env.REACT_APP_TITLE;
    const styledDot = ".";

    return (
        <Box>
            <Typography variant="h3" component="a" href="/" sx={{ textDecoration: "none", color: "inherit", cursor: "pointer", fontSize: "2.3rem", display: "inline-block" }}>
                {brandText.substring(0, brandText.length - 1)}
                <span className="styledDot">{styledDot}</span>
            </Typography>
        </Box>
    );
}

export default Brand;