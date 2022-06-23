import React, { useEffect, useState } from "react";
import axios from "axios";

const Adopt = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [pets, setPets] = useState(null);

  useEffect(() => {}, []);

  return <div className="d-flex justify-content-center">Adopt</div>;
};

export default Adopt;
