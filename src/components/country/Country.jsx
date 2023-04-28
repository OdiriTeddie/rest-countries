import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { name, flags } = country;
  const { svg, png } = flags;

  return (
    <article>
      <div>
        <img src={png} alt="" />
      </div>
      <h2>{name}</h2>
    </article>
  );
};

export default Country;
