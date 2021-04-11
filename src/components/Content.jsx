import { useState, useEffect } from "react";
import "../styles/Content.scss";
import Header from "./Header";
import AppDescription from "./AppDescription";
import QueryTimes from "./QueryTimes";

const Content = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
      if (longitude && latitude) {
        console.log("Position Available");
        console.log("Your latitude is :", latitude);
        console.log("Your longitude is :", longitude);
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
        <QueryTimes latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
};

export default Content;
