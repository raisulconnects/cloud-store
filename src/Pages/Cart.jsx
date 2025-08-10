import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { clearCart } from "../Features/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let sum = 0;
  cart.forEach((element) => {
    sum += Number(element.Price);
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
        <button
          className="btn btn-warning scale-120"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
