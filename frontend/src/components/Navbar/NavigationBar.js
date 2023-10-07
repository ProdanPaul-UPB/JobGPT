import Container from "react-bootstrap/Container";
import logo from "../../static/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import {AiOutlineBell, AiOutlineMail} from "react-icons/ai";

import "./NavigationBar.scss";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";

import Categories from "./Components/Categories/Categories";

const NavigationBar = () => {
    return (
        <>
            <div style={{borderBottom: "1px solid lightgray"}}>
                <Container>
                    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                        <Navbar.Brand href="#home">
                            <div className={"brand"}>
                                <img className={"logo"} src={logo}/>
                                <p className={"brandtext"}>JobGPT</p>
                            </div>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <div className={"separation-div"}>
                                <Nav className="me-auto">
                                    <Nav.Link href="#features">Funcţionalităţi</Nav.Link>
                                    <Nav.Link href="#pricing">Echipă</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="/notifications">
                                        <AiOutlineBell size={25} style={{margin: 'auto', marginRight: '10px'}}/>
                                    </Nav.Link>
                                    <Nav.Link href="/chat">
                                        <AiOutlineMail size={25} style={{margin: 'auto', marginRight: '10px'}}/>
                                    </Nav.Link>
                                    <NavDropdown title="Schimbă interacţiunea" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">
                                            Student
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Angajator / Universitate
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#deets">Profil</Nav.Link>
                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
            <div style={{borderBottom: "1px solid lightgray"}}>
                <Categories />
            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default NavigationBar;