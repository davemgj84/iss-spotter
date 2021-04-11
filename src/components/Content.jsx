import { useState, useEffect } from "react";
import "../styles/Content.scss";
import Header from "./Header";
import InfoBox from "./InfoBox";
import AppDescription from "./AppDescription";
import QueryTimes from "./QueryTimes";

const Content = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [show, setShow] = useState(false);

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
  }, [latitude, longitude]);

  return (
    <div className="content">
      <Header />
      <div className="main">
        <InfoBox show={show} setShow={setShow} />
        <AppDescription show={show} setShow={setShow} />
        <QueryTimes latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
};

export default Content;
