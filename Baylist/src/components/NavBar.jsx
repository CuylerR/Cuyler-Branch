import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="warning" expand="lg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1000, overflowY: 'auto' }}>
            {/* Will fix inline style with a new file later */}
            <Container fluid>
                <Navbar.Brand href="#">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="w-100 d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 flex-grow-1"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="me-auto">
                        {/* Add your navigation links here */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;