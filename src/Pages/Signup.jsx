import { useNavigate } from "react-router";
import { auth, db } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      ).then(() => {
        console.log("User Created");
        setLoading(false);
        setErrorMessage("Signup Successfull!");
      });

      await setDoc(doc(db, "users", auth.currentUser.uid), {
        email: newUser.email,
        role: "user",
      });

      navigate("/home");
    } catch (e) {
      console.log(e.message);
      setErrorMessage(e.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center translate-y-50 ">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <h1 className="text-center text-4xl p-2 mb-5 rounded-2xl text-white bg-purple-500 ">
          Sign Up Here
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="input input-primary px-10"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-primary px-10"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          required
        />

        {!loading ? (
          <button className="btn btn-soft btn-primary" type="submit">
            Sign Up{" "}
          </button>
        ) : (
          <button className="btn btn-soft btn-primary" type="submit" disabled>
            Creating User{" "}
            <span className="loading loading-spinner text-error size-4"></span>
          </button>
        )}

        <button
          className="btn btn-soft btn-secondary"
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >
          Got Account? Login
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
