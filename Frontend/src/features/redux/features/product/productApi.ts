import { TQueryParam } from "@/types/global";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProducts: builder.mutation({
      query: (product) => ({
        url: "/product/create-product",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    getProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }

        return {
          url: "/product",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
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
