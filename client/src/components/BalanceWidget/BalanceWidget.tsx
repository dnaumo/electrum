import "./BalanceWidget.scss";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { ReactComponent as ArrowIcon } from "../../svg/arrow-right.svg";

interface IBalanceWidgetProps {
  withHistory: boolean;
}

export function BalanceWidget({ withHistory }: IBalanceWidgetProps) {
  const { balance } = useAppSelector((state) => state.balance);

  return (
    <div className="widget balance-widget">
      <div className="title">Balance</div>
      <div className="balance">{balance.confirmed} mBTC</div>
      {withHistory && (
        <NavLink className="link" to="/history">
          <span>Go to History</span> <ArrowIcon />
        </NavLink>
      )}
    </div>
  );
}
