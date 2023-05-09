/* eslint-disable react/prop-types */
import Cousin from "../Cousin/Cousin";

const Aunty = ({ ring }) => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin>Abir</Cousin>
        <Cousin ring={ring} hasFriend={true}>
          Nihad
        </Cousin>
      </section>
    </div>
  );
};

export default Aunty;
