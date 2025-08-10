import { useDispatch } from "react-redux";
import { removeFromCart } from "../Features/cartSlice";

export default function CartItem({ product }) {
  const dispatch = useDispatch();
  let totalcost = Number(product.Price) * Number(product.quantity);

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask h-30 ">
              <img src={product?.Image} alt="Item Picture" />
            </div>
          </div>
        </div>
      </td>
      <td>{product?.Title}</td>
      <td>{product?.Price} $</td>
      <td>{product?.quantity}</td>
      <th> {totalcost} $</th>
      <th>
        <button
          className="btn btn-error"
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeFromCart(product));
          }}
        >
          Remove Item
        </button>
      </th>
    </tr>
  );
}
