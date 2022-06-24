import react, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/routes/AboutUs";
import Home from "./components/routes/Home";
import Contact from "./components/routes/Contact";
import Adopt from "./components/routes/Adopt";
import axios from "axios";

const key = "SXp2BsMkrzpp3bz0ncHCc1ekh9UQTipToeryJhbIcifEXcWQUL";
const secret = "JPm1gyfEIX85MBLoiNaWZAdII0DVbhsIaRP0QUR2";
let token;

function App() {
  const [isLoading, setLoading] = useState("false");
  const [pets, setPets] = useState(null);
  const [animal, setAnimal] = useState("dog");
  const [zipcode, setZipcode] = useState("11223");

  const handleSubmit = (input) => {
    setZipcode(input);
  };

  console.log(animal);
  const fetchAccessToken = () => {
    setLoading(false);
    console.log(zipcode);
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        token = data.access_token;
      })
      .then(() => {
        // use token to fetch animals
        fetch(
          `https://api.petfinder.com/v2/animals?type=${animal}&location=${zipcode}`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setLoading(true);
            setPets(data.animals);
          });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  useEffect(() => {
    fetchAccessToken();
  }, [animal, zipcode]);
  return (
    <div>
      <NavBar
        handleSubmit={handleSubmit}
        animal={animal}
        setAnimal={setAnimal}
        setZipcode={setZipcode}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/adopt"
          element={<Adopt pets={pets} isLoading={isLoading} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
