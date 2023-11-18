import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
const Main = () => {
  return (
    <main>
      <Dashboard />
      <Outlet />
    </main>
  );
};

export default Main;
