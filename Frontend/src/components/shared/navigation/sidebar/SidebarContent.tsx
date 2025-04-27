import EButton from "@/components/ui/EButton";
import { logout, selectedUser } from "@/features/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/features/redux/hook";
import { cn } from "@/lib/utils";
import { SidebarProps } from "@/types/sidebar";
import { Link, NavLink } from "react-router-dom";

const SidebarContent = ({
  routes,
  handleClose,
  showLoginButton,
}: Pick<SidebarProps, "routes" | "handleClose" | "showLoginButton">) => {
  const user = useAppSelector(selectedUser);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col space-y-4">
      {routes.map((route, index) => (
        <NavLink
          key={index}
          onClick={handleClose}
          className={({ isActive, isPending }) =>
            cn(
              "text-white",
              isActive && "text-blue-400 font-bold",
              isPending && "opacity-50"
            )
          }
          to={route.path}
        >
          {route.name}
        </NavLink>
      ))}
      {showLoginButton && (
        <div className="mt-auto pt-4 border-t border-gray-700">
          {user ? (
            <EButton text="Logout" onClick={() => dispatch(logout())} />
          ) : (
            <EButton onClick={handleClose}>
              <Link to="/login">Login</Link>
            </EButton>
          )}
        </div>
      )}
    </div>
  );
};
export default SidebarContent;
