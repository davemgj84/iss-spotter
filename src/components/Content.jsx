import { useState, useEffect } from "react";
import "../styles/Content.scss";
import Header from "./Header";
import AppDescription from "./AppDescription";
import QueryTimes from "./QueryTimes";

const Content = () => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      });
      if (longitude && latitude) {
        console.log("Position Available");
        console.log("Your longitude is :", longitude);
        console.log("Your latitude is :", latitude);
      }
    } else {
      console.log("Position Not Available");
    }
  });

  return (
    <div className="content">
      <Header />
      <div className="main">
        <AppDescription />
        <QueryTimes longitude={longitude} latitude={latitude} />
      </div>
    </div>
  );
};

export default Content;
