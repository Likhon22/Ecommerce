import { Button } from "@/components/ui/button";
import { mainLayoutRoutesWithoutLogin } from "@/constants/routes";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, NavLink } from "react-router-dom";

const NavbarDesktop = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Link to="/" className="text-2xl font-bold text-black">
        EasyWear
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          {mainLayoutRoutesWithoutLogin.map((route, index) => (
            <NavigationMenuItem key={index}>
                  <NavLink
                      
                className={({ isActive, isPending }) =>
                  cn(
                    "text-black",
                    isActive && "text-blue-500",
                    isPending && "opacity-50"
                  )
                }
                to={route.path}
              >
                {route.name}
              </NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button>
        <Link to="/login" className="font-bold">
          Login
        </Link>
      </Button>
    </div>
  );
};

export default NavbarDesktop;
