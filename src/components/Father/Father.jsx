/* eslint-disable react/prop-types */
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({ ring }) => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <Myself ring={ring} />
        <Brother />
        <Sister />
      </section>
    </div>
  );
};

export default Father;
