import BalanceWidget from "../../components/BalanceWidget/BalanceWidget";
import ReceiveBTC from "../../components/ReceiveBTC/ReceiveBTC";
import TestNetworkModeAlert from "../../components/TestNetworkModeAlert/TestNetworkModeAlert";
import "./Receive.scss";

function Receive() {
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

export default Receive;
