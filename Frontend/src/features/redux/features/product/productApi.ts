import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProducts: builder.mutation({
      query: (product) => ({
        url: "/product/create-product",
        method: "POST",
        body: product,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
    getSingleProduct: builder.query({
      query: (productId: string) => ({
        url: `/product/${productId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateProductsMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
} = productApi;
