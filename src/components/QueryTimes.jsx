import { useState } from "react";
import "../styles/QueryTimes.scss";
import Times from "./Times";
import NotFound from "./NotFound";

const QueryTimes = (props) => {
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = () => {
    setClicked(true);
    const url = `http://localhost:8080/api/${props.latitude}&${props.longitude}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Sorry, we could not fetch any data...");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setLoaded(true);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });
  };

  return (
    <div className="query-times">
      <h2>When is the I.S.S. passing next?</h2>
      <button
        className={clicked && loaded ? "clicked-loaded" : null}
        disabled={loaded}
        onClick={handleRequest}
      >
        {clicked && loaded ? <i className="fas fa-satellite"></i> : "Find Out!"}
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
