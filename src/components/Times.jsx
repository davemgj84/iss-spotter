import timestampConverter from "../helpers/timestampConverter";
import "../styles/Times.scss";

const Times = (props) => {
  const passes = props.data.map((pass, index) => {
    const datetime = new Date(0);
    const date = datetime.setUTCMilliseconds(pass.risetime);
    const duration = pass.duration;
    const totalTime = (duration) => {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes} minutes and ${seconds} seconds`;
    };
    return (
      <div className="time-item" key={index}>
        <i className="fas fa-space-shuttle"></i>
        <div className="date-time">
          <p>{timestampConverter(date)}</p>
          <p>Visible for {totalTime(duration)}!</p>
        </div>
      </div>
    );
  });

  return (
    <div className="time-block">
      <h3>I.S.S. will be passing on...</h3>
      {passes}
    </div>
  );
};

export default Times;
