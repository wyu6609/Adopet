import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const form = useRef();

  const [values, setValues] = useState(initialValues);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9roolf",
        "template_xwgfxun",
        e.target,
        "2DPcLjKjvPiBDX_s5"
      )
      .then(
        (result) => {
          console.log(result.text);

          alert(`Message successfully sent!`);
        },
        (error) => {
          console.log(error.text);
          alert(`Message failed to send!`);
        }
      );

    e.target.reset();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log(values);
  return (
    <div className="rounded shadow-lg  mt-5 mx-5 p-5 border border-white ">
      <Form ref={form} onSubmit={sendEmail}>
        <h1 className="py-4">Contact us</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Phone" name="phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="textArea">
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
          />
        </Form.Group>
        <Button
          disabled={!email || !name || !message || !phone}
          variant="danger"
          type="submit"
        >
          Submit message
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
