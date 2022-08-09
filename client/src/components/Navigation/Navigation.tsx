import "./Navigation.scss";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { routes } from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { usePathname } from "../../hooks/router";
import { fetchBalance } from "../../store/actions/balanceActions";
import logo from "../../svg/logo.svg";

export function Navigation() {
  const currentPath = usePathname();
  const dispatch = useAppDispatch();
  const { balance } = useAppSelector((state) => state.balance);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchBalance());
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <header>
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
        <span className="name">Electrum</span>
      </div>
      <div className="menu-container">
        <div className="balance">
          {balance.confirmed} mBTC <span className="circle" />
        </div>
        <div className="menu">
          {routes.map((route) => (
            <NavLink
              key={route.key}
              className={
                currentPath === route.path ? "menu-item active" : "menu-item"
              }
              to={route.path}
            >
              {route.title}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
