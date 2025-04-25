import { TLoginUser, TRegisterUser } from "@/types/auth";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user: TLoginUser) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
    }),
    register: builder.mutation({
      query: (user: TRegisterUser) => ({
        url: "/auth/register",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
