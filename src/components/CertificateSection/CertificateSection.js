import "./CertificateSection.css";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Container, Box, Typography } from '@mui/material';
import CertificateCard from "../CertificateCard/CertificateCard";

const CertificateSection = () => {

    const [certificateList, setCertificateList] = useState([]);

    const loadCertificates = async () => {
        try {
            const response = await Axios.get("http://localhost:3001/certificates");
            const data = response.data;

            setCertificateList(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadCertificates(); //load data
    }, []);

    return (
        <Container maxWidth="lg" className="certificateSection" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography align="center" variant="subtitle1" fontSize="2rem" sx={{ margin: "30px 0" }}>Certificates and Achievements</Typography>
            <Container maxWidth="lg" sx={{ display: "flex", flexWrap: "wrap", gap: "20px", flexDirection: { xl: "row", xs: "column" }, justifyContent: { xl: "space-evenly", xs: "baseline" }, alignItems: { xl: "baseline", xs: "center" } }}>
                {certificateList.map(item => {

                    const {
                        file,
                        issuedDate,
                        issuerImage,
                        snapshot,
                        title,
                        id,
                        driveLink,
                        issuer,
                    } = item;

                    return <CertificateCard
                        key={id}
                        issuerName={issuer}
                        issuerImage={issuerImage}
                        issuedDate={issuedDate}
                        title={title}
                        snapShotSource={snapshot}
                    />

                })}
            </Container>
        </Container>

    );
}

export default CertificateSection;