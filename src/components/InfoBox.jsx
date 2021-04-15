import "../styles/InfoBox.scss";
import "../styles/responsive/InfoBox-Responsive.scss";

const InfoBox = (props) => {
  if (!props.show) {
    return (
      <div className="info">
        <h2>
          What does this app do?{" "}
          <i
            onClick={() => props.setShow(true)}
            className="fas fa-info-circle"
          ></i>
        </h2>
      </div>
    );
  } else {
    return <></>;
  }
};

export default InfoBox;
