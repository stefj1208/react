import React, { useState } from "react";
import "./Like.css";

const Like = () => {
  const [like, setLike] = useState(42);

  const handleClick = (event) => {
    event.target.classList.toggle("like");
    if (event.target.classList.contains("like")) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  };

  return (
    <div>
      <div
        className="like-button"
        onClick={(event) => handleClick(event)}
      ></div>
      <p>{like} likes</p>
    </div>
  );
};

export default Like;
