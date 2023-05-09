/* eslint-disable react/prop-types */
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some product</p>;
  } else {
    message = (
      <div>
        <h3>Thank You!!</h3>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length ? "blue" : "red"}>
        Order Summary: {cart.length}
      </h2>
      <p className={`bold ${cart.length < 3 ? "green" : "red"}`}>
        Somethinggg!!!
      </p>
      {cart.length > 2 ? (
        <span className="bold purple">Buy More!!</span>
      ) : (
        <span className="bold orange">Sadd!!</span>
      )}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;

/*
CONDITIONAL RENDERING
1. use if else to set a variable that will contain an element, components
*/
