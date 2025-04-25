import { loginSchema, registerSchema } from "@/schemas/authSchema";
import { z } from "zod";

export type TLoginUser = z.infer<typeof loginSchema>;

export type TRegisterUser = z.infer<typeof registerSchema>;
