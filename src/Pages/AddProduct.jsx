import { useState } from "react";
import { useAddProductMutation } from "../Features/apiSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function AddProduct() {
  let a = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  let b = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Please Upload Product Image");

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
    toast("Product Added Successfully!");
    navigate("/shop");
  };

  // Here We have Used Cloudinary Web Service, THIS IS JUST HOW CLOUDINARY TAKES FILE
  const handleChangeImage = async (e) => {
    setMessage(
      <>
        Uploading Image{" "}
        <span className="loading loading-spinner text-primary"></span>
      </>
    );
    let fileDot = new FormData();
    // This Keys are required By Cloudinary So we can use it to upload our required Files
    fileDot.append("file", e.target.files[0]);
    fileDot.append("upload_preset", a);
    fileDot.append("cloud_name", b);

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dh5r86rqw/image/upload",
        {
          method: "POST",
          body: fileDot,
        }
      );

      const data = await res.json();
      console.log(data);
      setMessage("Upload Complete!");
      setProduct({
        ...product,
        Image: data.secure_url,
      });
    } catch (e) {
      console.error(e.message);
      setMessage(
        "An Error Occured during Image Upload. Error Code: ",
        e.message
      );
    }
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
      {/* <input
        type="text"
        name="Image"
        placeholder="Image URL"
        className="input input-primary"
        required
        onChange={handleChange}
      /> */}
      <input
        type="file"
        className="file-input file-input-success"
        required
        name="Image"
        onChange={handleChangeImage}
      />

      <h1>{message}</h1>
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
