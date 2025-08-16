// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../Firebase";
// import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useGetAllProductsQuery } from "../Features/apiSlice";

export default function Shop() {
  // Eita basically reference toiri kore je tumi ki tan dite chao, kon colections tan dite chao and db hoilo kon database theke, products hoilo collection tar name
  // const productsCollectionReference = collection(db, "products");

  // const [products, setProducts] = useState([]);
  const { data: products } = useGetAllProductsQuery();

  // useEffect(() => {
  //   const fetchCollection = async () => {
  //     const data = await getDocs(productsCollectionReference);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log(filteredData);
  //     setProducts(filteredData);
  //   };
  //   fetchCollection();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="flex justify-center flex-col gap-5">
      <h1 className="text-5xl text-center mb-5">Shop Section</h1>
      <div className="grid grid-cols-3 justify-items-center gap-5">
        {products?.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
