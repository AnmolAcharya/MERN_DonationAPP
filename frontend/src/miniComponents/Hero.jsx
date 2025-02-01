import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>VIBE HIGH</h1>
        <h3>HELP HIGHER</h3>
        <p>
        Support the students who need it most.
        Your donation can help someone reach their full potential.
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="/GenZ.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
