import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

/* eslint-disable react/prop-types */
const Special = ({ ring }) => {
  const angti = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      <p>
        <small>{ring}</small>
        <br />
        <small>{angti}</small>
      </p>
    </div>
  );
};

export default Special;
