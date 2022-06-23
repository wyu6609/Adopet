import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="rounded shadow-lg d-flex justify-content-center mt-5 mx-5 p-5 border border-white ">
      <Form className="">
        <h1 className="py-4">Contact us</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="textArea">
          <Form.Control as="textarea" rows="3" placeholder="Message" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit message
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
