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
        disabled={loaded}
        onClick={handleRequest}
      >
        <i className="fas fa-satellite-dish"></i>Find out!
      </button>
      {error && <NotFound message={error} />}
      {clicked && isLoading && (
        <div className="loading">
          <h2>
            <i className="fas fa-satellite-dish"></i>
            Loading<span>...</span>
          </h2>
        </div>
      )}
      {loaded && <Times data={data} />}
    </div>
  );
};

export default QueryTimes;
