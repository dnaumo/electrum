import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import SystemNotification from "./components/SystemNotification";
import { routes } from "./constants/routes";

export default function App() {
  return (
    <>
      <SystemNotification />
      <Navigation />
      <Routes>
        {routes.map((route) => (
          <Route key={route.key} path={route.path} element={route.element()} />
        ))}
      </Routes>
    </>
  );
}
