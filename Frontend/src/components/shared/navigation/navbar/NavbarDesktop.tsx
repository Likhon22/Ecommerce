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

const NavbarDesktop = () => {
  return (
    <Container>
      <div className="flex items-center justify-between w-full space-x-3  ">
        <Link to="/" className="text-2xl font-bold text-primary">
          EasyWear
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-3  ">
            {mainLayoutRoutesWithoutLogin.map((route, index) => (
              <NavigationMenuItem key={index}>
                <NavLink
                  to={route.path}
                  className={({ isActive, isPending }) =>
                    cn(
                      "relative inline-block px-1 text-primary font-medium  transition-colors duration-300",
                      "after:content-[''] after:absolute after:left-1 after:bottom-0 after:h-[1px] after:bg-gray-900 after:transition-all after:duration-300 after:ease-in-out",
                      "hover:after:w-3/4",

                      "after:w-2/4",
                      isActive && "text-blue-500 after:bg-blue-500 after:w-3/4",
                      isPending && "opacity-50"
                    )
                  }
                >
                  {route.name}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <EButton className="bg-primary">
          <Link to="/login" className="font-bold ">
            Login
          </Link>
        </EButton>
      </div>
    </Container>
  );
};

export default NavbarDesktop;
