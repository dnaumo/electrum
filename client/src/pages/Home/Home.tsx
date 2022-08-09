import "./Home.scss";
import BalanceWidget from "../../components/BalanceWidget";
import ReceiveBTC from "../../components/ReceiveBTC";
import SendBTC from "../../components/SendBTC";
import TestNetworkModeAlert from "../../components/TestNetworkModeAlert";

export function Home() {
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
