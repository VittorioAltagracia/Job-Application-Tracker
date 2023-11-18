import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
export default function Main() {
  return (
    <main>
      <Dashboard />
      <Outlet />
    </main>
  );
}
