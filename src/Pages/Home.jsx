import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Cloud Store</h1>
          <p className="pr-6 pt-6 pb-6">
            An e-commerce application where users can browse products and manage
            their cart. Admins can add and remove products
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/shop");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
