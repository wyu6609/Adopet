import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import PetCard from "../PetCard";

const Adopt = ({ pets, isLoading }) => {
  let petCard = pets?.map((pet) => {
    return <PetCard pet={pet} key={pet.id} />;
  });
  return (
    <div className="d-flex flex-column justify-content-center mt-5">
      {isLoading ? (
        <>{petCard}</>
      ) : (
        <Spinner animation="border" variant="success" />
      )}
    </div>
  );
};

export default Adopt;
