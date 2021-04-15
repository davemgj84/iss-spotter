import { useState } from "react";

const useFetch = (lat, long) => {
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = () => {
    if (lat && long) {
      setClicked(true);
      const url = `https://iss-spotter.herokuapp.com/api/passtimes?lat=${lat}&long=${long}`;
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
    } else {
      setError("Please turn location services on");
    }
  };

  return { data, clicked, isLoading, loaded, error, handleRequest };
};

export default useFetch;
