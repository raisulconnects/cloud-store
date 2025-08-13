import { useAuth } from "../Contexts/AuthContext";
import Home from "../Pages/Home";

export default function PrivateRouterProtector({ children }) {
  const { userLoggedIn, role } = useAuth();
  return userLoggedIn && role == "admin" ? children : <Home />;
}
