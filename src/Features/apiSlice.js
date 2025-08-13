import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../Firebase";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      queryFn: async () => {
        try {
          const productsCollectionReference = collection(db, "products");
          const data = await getDocs(productsCollectionReference);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          return { data: filteredData };
        } catch (e) {
          return { error: e.message };
        }
      },
      providesTags: ["products"],
      keepUnusedDataFor: 5,
    }),

    addProduct: builder.mutation({
      queryFn: async (product) => {
        try {
          const productsCollectionReference = collection(db, "products");
          await addDoc(productsCollectionReference, product);
          return { data: product };
        } catch (e) {
          console.log(e.message);
          return { error: e.message };
        }
      },
      invalidatesTags: ["products"],
    }),

    // karon firebase ID Expect kore, not the whole product
    deleteProduct: builder.mutation({
      queryFn: async ({ id }) => {
        try {
          await deleteDoc(doc(db, "products", id));
          return { data: "The Product Was Deleted" };
        } catch (e) {
          return { error: e.message };
        }
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = apiSlice;
