import "../styles/QueryTimes.scss";
import "../styles/responsive/QueryTimes-Responsive.scss";
import useFetch from "../hooks/useFetch";
import Times from "./Times";
import NotFound from "./NotFound";

const QueryTimes = (props) => {
  const { data, clicked, isLoading, loaded, error, handleRequest } = useFetch(
    props.latitude,
    props.longitude
  );

  return (
    <div className="query-times">
      <h2>When will the ISS pass next?</h2>
      <button
        className={loaded ? "loaded" : null}
        disabled={true}
        onClick={handleRequest}
      >
        <i className="fas fa-satellite-dish"></i>Find out!
      </button>
      {error && <NotFound message={error} />}
      <div className="loading">
        <div>
          Unfortunately the open-notify API is no longer supported and no longer
          provides the ISS data required for this application.
          <div style={{ marginTop: 16 }}>
            More details on the API Docs here:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://open-notify.org/Open-Notify-API/ISS-Pass-Times/"
            >
              Open-Notify
            </a>
          </div>
        </div>
      </div>
      {clicked && isLoading && (
        <div className="loading">
          <h2>
            <i className="fas fa-satellite-dish"></i>
            Loading<span>...</span>
          </h2>
        </div>
      )}
      {loaded && <Times data={data} />}
      <div className="info">
        <p>
          About
          <i
            onClick={() => props.setShow(true)}
            className="fas fa-info-circle"
          ></i>
        </p>
      </div>
    </div>
  );
};

export default QueryTimes;
