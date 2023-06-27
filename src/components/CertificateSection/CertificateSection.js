import "./CertificateSection.css";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Container, Box } from '@mui/material';
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
        <Container maxWidth="lg" className="certificateSection" sx={{ display: "flex", flexWrap: "wrap", gap: "20px", flexDirection: { xl: "row", xs: "column" }, justifyContent: { xl: "space-evenly", xs: "baseline" }, alignItems: { xl: "baseline", xs: "center" } }}>
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
    );
}

export default CertificateSection;