import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProducts: builder.mutation({
      query: (product) => ({
        url: "/products/create-product",
        method: "POST",
        body: product,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/products/get-products",
        method: "GET",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id: string) => ({
        url: `/products/get-product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateProductsMutation, useGetProductsQuery } = productApi;
