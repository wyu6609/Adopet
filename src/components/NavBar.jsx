import { useNavigate } from "react-router-dom";
import {
  Nav,
  Navbar,
  Button,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";

function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand
          text="white"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            className="rounded-pill"
            src="/images/navbarLogo.png"
            width="80"
            height="55"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              onClick={() => {
                navigate("/aboutus");
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/adopt");
              }}
            >
              Adopt
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search a pet"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
