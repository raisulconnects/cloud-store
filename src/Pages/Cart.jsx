import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { clearCart } from "../Features/cartSlice";
import { useAuth } from "../Contexts/AuthContext";
import { useState } from "react";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { userLoggedIn } = useAuth();

  let sum = 0;
  cart.forEach((element) => {
    sum += Number(element.Price * element.quantity);
  });

  return (
    <div className=" max-w-350   mx-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Discard</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Ekhanei tablerow gula ashbe from CartItem Component map kore */}
          {cart.map((item) => (
            <CartItem product={item} />
          ))}
        </tbody>
      </table>
      <div className="flex flex-col justify-center items-center mt-30">
        {sum > 0 && (
          <h1 className="text-2xl font-bold mb-5">Sub Total Cost: {sum} $</h1>
        )}
        <div className="flex gap-10 justify-center items-center">
          <button
            className="btn btn-warning scale-120 hover:scale-125 transition-all duration-200"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>

          <button
            className="btn btn-accent scale-120 hover:scale-125 transition-all duration-200"
            onClick={() => {
              window.location.href =
                "https://buy.stripe.com/test_eVqfZidYQ9Bi1Cy96Abo400";
            }}
            disabled={userLoggedIn && cart.length > 0 ? false : true}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
