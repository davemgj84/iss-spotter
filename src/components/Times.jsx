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
        <i className="fas fa-satellite"></i>
        <ul className="date-time">
          <li>
            <p>{timestampConverter(date)}</p>
            <p> for {totalTime(duration)}!</p>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div className="time-block">
      <h3>The next five passes are . . .</h3>
      {passes}
      <p className="note">Check back later for more times!</p>
    </div>
  );
};

export default Times;
