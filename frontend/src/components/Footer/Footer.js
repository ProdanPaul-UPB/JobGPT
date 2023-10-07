import "./Footer.scss";
import logo from "../../static/logo.png";
import Container from "react-bootstrap/Container";

import {FaF, FaPinterest, FaXTwitter} from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div style={{background: '#e8edea'}}>
            <Container>

                <div className={'footer'}>
                    <div style={{display: 'flex'}}>
                        <img src={logo} style={{height: "100px"}}/>
                        <p style={{margin: 'auto'}}>All rights reserved 2023 © JobGPT </p>
                    </div>
                    <div style={{margin: 'auto', marginRight: 0}}>
                        <Link to={'/'} style={{margin: 'auto', marginRight: '10px', color: 'black'}}>
                            <FaXTwitter size={25} style={{margin: 'auto', marginRight: '10px'}}/>
                        </Link>

                        <Link to={'/'} style={{margin: 'auto', marginRight: '10px', color: 'black'}}>
                            <FaInstagram size={25} style={{margin: 'auto', marginRight: '10px'}}/>
                        </Link>

                        <Link to={'/'} style={{margin: 'auto', marginRight: '10px', color: 'black'}}>
                            <FaFacebook size={25} style={{margin: 'auto', marginRight: '10px'}}/>
                        </Link>

                        <Link to={'/'} style={{margin: 'auto', marginRight: '10px', color: 'black'}}>
                            <FaLinkedin size={25} style={{margin: 'auto', marginRight: '10px'}}/>
                        </Link>

                        <Link to={'/'} style={{margin: 'auto', marginRight: '10px', color: 'black'}}>
                            <FaPinterest size={25} style={{margin: 'auto', marginRight: '10px'}}/>
                        </Link>
                    </div>
                </div>

            </Container>
        </div>
    );
}

export default Footer;