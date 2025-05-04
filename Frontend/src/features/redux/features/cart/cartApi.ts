import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (email: string) => ({
        url: `/cart/${email}`,
        method: "GET",
      }),
    }),
    addToCart: builder.mutation({
      query: (item) => ({
        url: "/cart/create-cart",
        method: "POST",
        body: item,
      }),
    }),
  }),
});

export const { useGetCartQuery, useAddToCartMutation } = cartApi;
