import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

const Grandpa = () => {
  const ring = "diamond";
  return (
    <div className="grandpa">
      <h2>GrandPa</h2>
      <section className="flex">
        <Father ring={ring} />
        <Uncle />
        <Aunty ring={ring} />
      </section>
    </div>
  );
};

export default Grandpa;
