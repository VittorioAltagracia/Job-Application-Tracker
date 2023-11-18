import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import "./styling/App.css";
import Dashboard from "./components/Dashboard";
import { UserContextProvider } from "../utils/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/register" element={<SignUpPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
