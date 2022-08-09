import "./TestNetworkModeAlert.scss";

function TestNetworkModeAlert() {
  return (
    <div className="alert-wrapper">
      <div className="alert">
        <div className="title">You are in the Test Network Mode!</div>
        <div className="message">
          Coins are useless in this mode. Test network is not included to the
          main Bitcoin network. It’s only for testing.
        </div>
      </div>
    </div>
  );
}

export default TestNetworkModeAlert;
