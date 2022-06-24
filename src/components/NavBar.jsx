import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  Navbar,
  Button,
  Container,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

function NavBar({ handleSubmit, animal, setAnimal, setZipcode }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

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
          <div className="d-flex">
            <Form.Control
              placeholder="Enter zip code"
              className="me-2 "
              aria-label="Search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <DropdownButton
              id="dropdown-item-button"
              title={animal}
              className="text-capitalize "
              variant="secondary"
            >
              <Dropdown.Item
                as="button"
                onClick={() => {
                  setAnimal("dog");
                }}
              >
                Dog
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => {
                  setAnimal("cat");
                }}
              >
                Cat
              </Dropdown.Item>
            </DropdownButton>
            <Button
              variant="success"
              onClick={() => {
                handleSubmit(search);
              }}
            >
              Search
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
