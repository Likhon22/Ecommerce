import { mainLayoutRoutesWithoutLogin } from "@/constants/routes";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, NavLink } from "react-router-dom";
import EButton from "@/components/ui/EButton";
import Container from "../../layout/container/Container";
import { useAppDispatch, useAppSelector } from "@/features/redux/hook";
import { logout, selectedUser } from "@/features/redux/features/auth/authSlice";

const NavbarDesktop = () => {
  const user = useAppSelector(selectedUser);
  const dispatch = useAppDispatch();
  return (
    <Container>
      <div className="flex items-center justify-between w-full py-5 border-b border-border">
        <Link
          to="/"
          className="text-3xl font-bold font-playfair text-primary tracking-wider"
        >
          EasyWear
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {mainLayoutRoutesWithoutLogin.map((route, index) => (
              <NavigationMenuItem key={index}>
                <NavLink
                  to={route.path}
                  className={({ isActive, isPending }) =>
                    cn(
                      "relative inline-block px-1 font-medium uppercase tracking-wide text-sm transition-colors duration-300 btn-hover-effect",
                      isPending && "opacity-50",
                      isActive
                        ? "text-primary after:w-full"
                        : "text-foreground/80 hover:text-primary"
                    )
                  }
                >
                  {route.name}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {user ? (
          <EButton
            onClick={() => dispatch(logout())}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-all duration-300"
          >
            Sign Out
          </EButton>
        ) : (
          <EButton className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-all duration-300">
            <Link to="/login" className="font-medium">
              Sign In
            </Link>
          </EButton>
        )}
      </div>
    </Container>
  );
};

export default NavbarDesktop;
