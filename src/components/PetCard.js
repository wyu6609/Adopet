import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const PetCard = ({ pet }) => {
  const [image, setImage] = useState(
    pet.primary_photo_cropped ? pet.primary_photo_cropped.small : ""
  );

  let address = `${pet.contact.address.address1 || ""} ${
    pet.contact.address.city
  }, ${pet.contact.address.state} ${pet.contact.address.postcode}`;

  return (
    <Card className="m-2">
      <Row>
        <Col sm={3} md={3}>
          <Card.Img
            className="m-2"
            style={{
              height: "200px",
              width: "200px",
            }}
            alt="no image available"
            src={image}
            width="50%"
          />
          <Card.Title align="center" className="m-1">
            {pet.name}
          </Card.Title>
        </Col>
        <Col sm={9} md={9}>
          <Card.Body>
            <Row>
              <Col sm={2}>
                <Card.Text>Attributes:</Card.Text>
                <Card.Text>Vaccinated: </Card.Text>
                <Card.Text>Spayed/Neutered: </Card.Text>

                <Card.Text>Address:</Card.Text>
                <Card.Text>Distance: </Card.Text>
                <Card.Text>Description: </Card.Text>
              </Col>
              <Col sm={10}>
                <Card.Text>{`${pet.gender}, ${
                  pet.coat ? `${pet.coat} hair` : ""
                }, ${pet.colors.primary || ""} ${
                  pet.breeds.primary
                }`}</Card.Text>
                <Card.Text>
                  {pet.attributes.shots_current ? "YES" : "NO"}
                </Card.Text>
                <Card.Text>
                  {pet.attributes.spayed_neutered ? "YES" : "NO"}
                </Card.Text>

                <Card.Text> {address}</Card.Text>
                <Card.Text>{parseInt(pet.distance)} mi</Card.Text>
                <Card.Text>
                  {pet.description ? pet.description : "N/A"}
                </Card.Text>
              </Col>
            </Row>
            <Button
              className="mt-3"
              onClick={() => {
                window.open(pet.url, "_blank");
              }}
              variant="primary"
            >
              More Details
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default PetCard;
