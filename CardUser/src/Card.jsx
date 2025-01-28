import React, { useState } from "react";
import "./Card.css";
import Like from "./Like";

const Card = ({ image, pseudo, email, description, sexe }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`card ${sexe} ${isHovered ? "border" : ""}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt="User profile" />
      <h2>{pseudo}</h2>
      <h3>{email}</h3>
      <p>{description}</p>
      <Like />
    </article>
  );
};

export default Card;
