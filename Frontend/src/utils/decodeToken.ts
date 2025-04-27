import { TUser } from "@/types/auth";
import { jwtDecode } from "jwt-decode";
const decodeToken = (token: string) => {
  return jwtDecode(token) as TUser;
};

export default decodeToken;
