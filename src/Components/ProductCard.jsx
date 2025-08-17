import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cartSlice";
import { useAuth } from "../Contexts/AuthContext";
import { useDeleteProductMutation } from "../Features/apiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { role, userLoggedIn } = useAuth();
  const navigator = useNavigate();

  const [deleteProduct] = useDeleteProductMutation();

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={product?.Image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.Title}</h2>
        <p>{product?.Description}</p>
        <p>Price: {product?.Price}$</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              if (userLoggedIn) {
                dispatch(addToCart(product));
                toast.success(`${product.Title} added to Cart`, {
                  position: "bottom-left",
                });
              } else {
                navigator("/login");
                toast.error("Please Login First");
              }
            }}
          >
            Add To Cart
          </button>

          {role == "admin" && (
            <button
              className="btn btn-active btn-error"
              onClick={async () => {
                await deleteProduct(product);
                console.log("Product Deleted");
                toast("Product Deleted!");
              }}
            >
              Delete Product
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
