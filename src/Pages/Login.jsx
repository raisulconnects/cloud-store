import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../Firebase";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      setLoading(false);

      console.log(auth.currentUser);
      navigate("/home");
    } catch (e) {
      console.log(e.message);
      setErrorMessage(e.message);
    }
  };

  return (
    <div className="flex justify-center items-center translate-y-50 ">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <h1 className="text-center text-4xl p-2 mb-5 rounded-2xl text-white bg-purple-500 ">
          Login
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="input input-primary px-10"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-primary px-10"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />

        {!loading ? (
          <button className="btn btn-soft btn-primary" type="submit">
            Login
          </button>
        ) : (
          <button className="btn btn-soft btn-primary" type="submit" disabled>
            Logging In!
            <span className="loading loading-spinner text-error size-4"></span>
          </button>
        )}

        <button
          className="btn btn-soft btn-secondary"
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          Got No Account? Sign Up
        </button>
        {errorMessage ? (
          <h1 className="text-center text-1xl">{errorMessage}</h1>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
