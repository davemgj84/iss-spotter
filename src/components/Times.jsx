import timestampConverter from "../helpers/timestampConverter";
import totalTime from "../helpers/totalTime";
import "../styles/Times.scss";

const Times = (props) => {
  const passes = props.data.map((pass, index) => {
    const datetime = new Date(0);
    const date = datetime.setUTCMilliseconds(pass.risetime);
    const duration = pass.duration;
    return (
      <div className="time-item" key={index}>
        <i className="fas fa-space-shuttle"></i>
        <ul className="date-time">
          <li>
            <p> {timestampConverter(date)}</p>
            <p>Visible for {totalTime(duration)}!</p>
          </li>
        </ul>
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
