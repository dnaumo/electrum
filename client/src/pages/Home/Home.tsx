import "./Home.scss";
import BalanceWidget from "../../components/BalanceWidget/BalanceWidget";
import ReceiveBTC from "../../components/ReceiveBTC/ReceiveBTC";
import SendBTC from "../../components/SendBTC/SendBTC";
import TestNetworkModeAlert from "../../components/TestNetworkModeAlert/TestNetworkModeAlert";

function Home() {
  return (
    <div className="container home-page">
      <div className="info">
        <BalanceWidget withHistory />
        <TestNetworkModeAlert />
      </div>
      <div className="actions">
        <SendBTC />
        <ReceiveBTC />
      </div>
    </div>
  );
}

export default Home;
