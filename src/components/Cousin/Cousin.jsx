import Friend from "../Friend/Friend";

/* eslint-disable react/prop-types */
const Cousin = ({ children, hasFriend, ring }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <div>
        <small>{children}</small>
        {hasFriend && <Friend ring={ring} />}
      </div>
    </div>
  );
};

export default Cousin;
