import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="text-center m-5 scale-in-hor-left">
      <img
        className="rounded-circle my-5"
        src="/images/logo.jpeg"
        height="150"
        width="150"
        border-radius="10"
      />
      <h2>About Adopet</h2>

      <p className="m-5">
        Our mission is to find loving homes for these animals in need. We are
        first to serve, wherever animals are in need of rescue, shelter,
        protection or security. Through our innovative leadership initiatives –
        from our “No Animals Were Harmed®” program in Hollywood to broad-based
        farm and conservation animal welfare certifications, to rapid response
        rescue and care across the country – AdoPet sets the gold standard as
        the most visionary and effective animal welfare organization in the
        nation.
      </p>
    </div>
  );
};

export default AboutUs;
