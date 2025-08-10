import { useAuth } from "../Contexts/AuthContext";
import Home from "../Pages/Home";

export default function RouteProtector({ children }) {
  const { userLoggedIn } = useAuth();

  return userLoggedIn ? children : <Home />;
}
