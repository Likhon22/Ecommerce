import { TCartProduct } from "@/types/cart";
import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (email: string) => ({
        url: `/cart/${email}`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    addToCart: builder.mutation({
      query: (item) => ({
        url: "/cart/create-cart",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["cart"],
    }),
    deleteCart: builder.mutation({
      query: ({
        email,
        payload,
      }: {
        email: string;
        payload: Pick<TCartProduct, "productId" | "color" | "size">;
      }) => ({
        url: `/cart/${email}`,
        method: "DELETE",
        body: payload,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useDeleteCartMutation, useGetCartQuery, useAddToCartMutation } =
  cartApi;
