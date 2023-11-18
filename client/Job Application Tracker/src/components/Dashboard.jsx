import NavigationBar from "./Navbar";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../../utils/UserContext";

const Dashboard = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  return <NavigationBar />;
};

export default Dashboard;
