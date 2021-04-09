import { useState } from "react";
import "../styles/QueryTimes.scss";
import Times from "./Times";

const QueryTimes = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleRequest = () => {
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
        setError(null);
        console.log(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setIsLoading(false);
          setError(err.message);
          console.log(error);
        }
      });
  };

  return (
    <div className="query-times">
      <h2>When is the I.S.S. passing next?</h2>
      <button onClick={handleRequest}>Find out!</button>
      {!isLoading && <Times data={data} />}
    </div>
  );
};

export default QueryTimes;
