import BalanceWidget from "../../components/BalanceWidget/BalanceWidget";
import SendBTC from "../../components/SendBTC/SendBTC";
import TestNetworkModeAlert from "../../components/TestNetworkModeAlert/TestNetworkModeAlert";
import "./Send.scss";

function Send() {
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

export default Send;
