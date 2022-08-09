import History from "../pages/History/History";
import Home from "../pages/Home/Home";
import Receive from "../pages/Receive/Receive";
import Send from "../pages/Send/Send";
import Settings from "../pages/Settings/Settings";

export interface IRoute {
  key: string;
  path: string;
  element: () => JSX.Element;
  title: string;
}

export const routes: IRoute[] = [
  {
    key: "home",
    path: "/",
    element: Home,
    title: "Home",
  },
  {
    key: "send",
    path: "/send",
    element: Send,
    title: "Send",
  },
  {
    key: "receive",
    path: "/receive",
    element: Receive,
    title: "Receive",
  },
  {
    key: "history",
    path: "/history",
    element: History,
    title: "History",
  },
  {
    key: "settings",
    path: "/settings",
    element: Settings,
    title: "Settings",
  },
];
