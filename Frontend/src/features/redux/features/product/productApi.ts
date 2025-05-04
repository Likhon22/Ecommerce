import { TQueryParam, TResponse } from "@/types/global";
import { baseApi } from "../../api/baseApi";
import { TCreateProduct } from "@/types/products";

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
    getProducts: builder.query<
      TResponse<TCreateProduct[]>,
      TQueryParam[] | undefined
    >({
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
    getSingleProduct: builder.query<TResponse<TCreateProduct>, string>({
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
