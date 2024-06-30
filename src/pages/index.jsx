// src/App.js
import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Table, Offcanvas } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    const [showSidebar, setShowSidebar] = React.useState(false);

    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <Container fluid>
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                <Container fluid>
                    <Navbar.Brand href="#">Task Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar} />
                    
                </Container>
            </Navbar>

            <Row>
                <Col lg={2} className="d-none d-lg-block bg-light sidebar">
                    <Nav className="flex-column pt-3">
                        <Nav.Link href="#">Dashboard</Nav.Link>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Projects</Accordion.Header>
                                <Accordion.Body>

                            <p>temp</p>
                            <p>temp2</p>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Nav>
                </Col>

                <Offcanvas show={showSidebar} onHide={toggleSidebar} className="bg-light">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <Nav.Link href="#">Dashboard</Nav.Link>
                            <Nav.Link href="#">Tasks</Nav.Link>
                            <Nav.Link href="#">Projects</Nav.Link>
                            <Nav.Link href="#">Teams</Nav.Link>
                            <Nav.Link href="#">Reports</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>

                <Col md={9} lg={10} className="px-md-4">
                <Outlet />
                </Col>
            </Row>
        </Container>
    );
};


export default Dashboard;
