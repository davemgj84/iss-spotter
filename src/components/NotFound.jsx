import "../styles/NotFound.scss";

const NotFound = (props) => {
  return (
    <div className="error">
      <h2>Sorry...</h2>
      <p className="error-message">"Error: {props.message}"...</p>
      <p>We could not find the ISS right now...</p>
      <p>Please try again later...</p>
    </div>
  );
};

export default NotFound;
