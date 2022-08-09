import BalanceWidget from "../../components/BalanceWidget";
import SendBTC from "../../components/SendBTC";
import TestNetworkModeAlert from "../../components/TestNetworkModeAlert";
import "./Send.scss";

export function Send() {
  return (
    <div className="container send-page">
      <SendBTC />
      <div className="info-container">
        <BalanceWidget withHistory={false} />
        <TestNetworkModeAlert />
      </div>
    </div>
  );
}
