import { Link, useNavigate } from "react-router";
import { useAuth } from "../Contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

export default function Navbar() {
  const { role, userLoggedIn } = useAuth();
  const navigator = useNavigate();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/login"}> Login </Link>
            </li>
            <li>
              <Link to={"/signup"}> Signup </Link>
            </li>
            <li>
              <Link to={"/shop"}> Shop </Link>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost text-xl"
          onClick={() => {
            navigator("/home");
          }}
        >
          Cloud Store
        </a>
      </div>
      <div className="navbar-center hidden lg:flex mr-5">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/home"}> Home </Link>
          </li>

          {!userLoggedIn && (
            <>
              <li>
                <Link to={"/login"}> Login </Link>
              </li>
              <li>
                <Link to={"/signup"}> Signup </Link>
              </li>
            </>
          )}
          <li>
            <Link to={"/shop"}> Shop </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {userLoggedIn && (
          <div className="navbar-end pr-4">
            <Link to={"/cart"}>Cart</Link>
          </div>
        )}

        {userLoggedIn && role === "admin" && (
          <button
            className="btn btn-success text-1xl m-2"
            onClick={() => {
              navigator("/add-product");
            }}
          >
            {" "}
            Add Product
          </button>
        )}
        {userLoggedIn && (
          <button
            className="btn btn-error"
            onClick={() => {
              signOut(auth);
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
