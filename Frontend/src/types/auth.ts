import { loginSchema, registerSchema } from "@/schemas/authSchema";
import { z } from "zod";

export type TLoginUser = z.infer<typeof loginSchema>;

export type TRegisterUser = z.infer<typeof registerSchema>;
export type TUser = {
  name: string;
  email: string;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
};
export type TAuthState = {
  user: TUser | null;
  token: string | null;
};
