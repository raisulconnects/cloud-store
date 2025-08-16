import { useNavigate } from "react-router";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Page Not Found</h1>
      <button onClick={() => navigate("/home")}>Home</button>
    </>
  );
}
