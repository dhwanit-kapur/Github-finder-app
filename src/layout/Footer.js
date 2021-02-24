import React from "react";
import {Container} from "reactstrap";

const Footer = () => {
    return(
        <Container fluid tag="footer" 
        className="text-center text-white text-uppercase fixed-bottom bg-info p-3">
            Github search app built using Firebase
        </Container>
    )
}

export default Footer;