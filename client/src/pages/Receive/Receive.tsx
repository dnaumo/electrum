import BalanceWidget from "../../components/BalanceWidget";
import ReceiveBTC from "../../components/ReceiveBTC";
import TestNetworkModeAlert from "../../components/TestNetworkModeAlert";
import "./Receive.scss";

export function Receive() {
  return (
    <div className="container receive-page">
      <ReceiveBTC />
      <div className="info-container">
        <BalanceWidget withHistory={false} />
        <TestNetworkModeAlert />
      </div>
    </div>
  );
}
