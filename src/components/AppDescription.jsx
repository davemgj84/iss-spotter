import "../styles/AppDescription.scss";

const AppDescription = () => {
  return (
    <div className="description">
      <h2>What does this app do?</h2>
      <p>
        This app is for space enthusiasts who are interested in spotting the
        International Space Station (ISS). The ISS completes multiple
        revolutions around Earth per day. In fact, it passes overhead every ~90
        minutes, and in some cases can even be spotted with the naked eye,
        though not every time.
      </p>
      <p>
        Using your IP and Geo-Location, this app will connect with the "Open
        Notify" API and provide you with the best possible times to observe the
        Space Station pass overheard! For this to work, you will have to allow
        the browser to access your current location. Also if you are using a
        VPN, remember to turn it off so you may get times relevant to your
        position!
      </p>
    </div>
  );
};

export default AppDescription;
