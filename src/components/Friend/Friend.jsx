/* eslint-disable react/prop-types */
const Friend = ({ ring }) => {
  console.log(ring);
  return (
    <div>
      <h2>Friend</h2>
      {ring && (
        <p>
          <small>{ring}</small>
        </p>
      )}
    </div>
  );
};

export default Friend;
