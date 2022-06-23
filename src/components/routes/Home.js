import React from "react";
import { Carousel, Image } from "react-bootstrap";

const Home = () => {
  return (
    <Carousel variant="dark" interval={3000} className="text-white">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/pet.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Let's play again, adopt them.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/dog2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption text="light">
          <h5>Dog: You saved my life</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/cat1.jpeg"
          height="80%"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Adoption is a Loving Option</h5>
          <p>Find out Your Companion</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
