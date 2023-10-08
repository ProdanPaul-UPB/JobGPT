import Container from "react-bootstrap/Container";
import logo from "../../static/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import {AiOutlineBell, AiOutlineMail} from "react-icons/ai";

import "./NavigationBar.scss";
import Footer from "../Footer/Footer";
import {Link, Outlet} from "react-router-dom";

import {useNavigate} from "react-router-dom";

import Categories from "./Components/Categories/Categories";
import {useEffect, useState} from "react";
import {getAuthFromStorage} from "../../utils/storage";

const NavigationBar = () => {

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    const [status, setStatus] = useState('student');

    useEffect(() => {
        const storedStatus = localStorage.getItem('status');
        if (storedStatus) {
            setStatus(storedStatus);
        }
    }, []);
    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        localStorage.setItem('status', newStatus);
    };
    useEffect(() => {
        if (getAuthFromStorage()) {
            setLoggedIn(true);
        }
    }, []);

    const renderNavDropdownTitle = () => {
        switch (status) {
            case 'student':
                return 'Navighezi ca Student';
            case 'organization':
                return 'Navighezi ca Angajator / Universitate';
            default:
                return 'Navighezi ca Student';
        }
    };

    return (<>
        <div style={{borderBottom: "1px solid lightgray"}}>
            <Container>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Navbar.Brand href="/">
                        <div className={"brand"}>
                            <img className={"logo"} src={logo}/>
                            <p className={"brandtext"}>JobGPT</p>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className={"separation-div"}>
                            <Nav className="me-auto">
                                <Nav.Link href="/team">Echipă</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/notifications">
                                    <AiOutlineBell size={25} style={{margin: 'auto', marginRight: '10px'}}/>
                                </Nav.Link>
                                <Nav.Link href="/chat">
                                    <AiOutlineMail size={25} style={{margin: 'auto', marginRight: '10px'}}/>
                                </Nav.Link>
                                {loggedIn ? (
                                    <NavDropdown title={renderNavDropdownTitle()} id="collapsible-nav-dropdown">

                                        <NavDropdown.Item
                                        >
                                            Log Out
                                        </NavDropdown.Item>

                                    </NavDropdown>) : (<Nav.Link style={{marginRight: '10px'}} href={'/login'}>Login</Nav.Link>)}

                                <button onClick={() => {
                                    navigate('/organization/dash')
                                }} style={{
                                    color: 'white',
                                    background: '#153470',
                                    border: 'none',
                                    borderRadius: "5px",
                                    padding: '0px 5px 0px 5px'
                                }}>
                                    Dashboard
                                </button>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
        <div style={{borderBottom: "1px solid lightgray"}}>
            <Categories/>
        </div>
        <Outlet context={{setLoggedIn: setLoggedIn}}/>
        <Footer/>
    </>)
}

export default NavigationBar;