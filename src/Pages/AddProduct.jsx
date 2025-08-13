import { useState } from "react";
import { useAddProductMutation } from "../Features/apiSlice";
import { useNavigate } from "react-router";

export default function AddProduct() {
  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    Description: "",
    Price: 0,
    Title: "",
    Image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.name === "Price" ? Number(e.target.value) : e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await addProduct(product);
    navigate("/shop");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 justify-center items-center mt-10"
    >
      <label>Description</label>
      <input
        name="Description"
        type="text"
        placeholder="Description"
        className="input input-primary"
        required
        onChange={handleChange}
      />
      <label>Price</label>
      <input
        name="Price"
        type="number"
        placeholder="Price"
        className="input input-primary"
        required
        onChange={handleChange}
      />
      <label>Title</label>
      <input
        name="Title"
        type="text"
        placeholder="Title"
        className="input input-primary"
        required
        onChange={handleChange}
      />
      <label>Image</label>
      <input
        type="text"
        name="Image"
        placeholder="Image URL"
        className="input input-primary"
        required
        onChange={handleChange}
      />
      <div className="flex gap-2">
        <button className="btn btn-secondary" type="submit">
          Add Product
        </button>
        <button className="btn btn-secondary" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
}
