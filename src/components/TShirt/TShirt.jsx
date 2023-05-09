import "./TShirt.css";

// eslint-disable-next-line react/prop-types
const TShirt = ({ tshirt, handleAddToCart }) => {
  // eslint-disable-next-line react/prop-types
  const { picture, name, price } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
