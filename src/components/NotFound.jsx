import "../styles/NotFound.scss";
import "../styles/responsive/NotFound-Responsive.scss";

const NotFound = (props) => {
  return (
    <div className="error">
      <h2>Sorry...</h2>
      <p className="error-message">
        <i className="fas fa-exclamation-triangle"></i>"{props.message}..."
      </p>
      <p>We could not find the ISS right now...</p>
      <p>Please try again later...</p>
    </div>
  );
};

export default NotFound;
