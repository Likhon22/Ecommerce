import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { mainLayoutRoutes } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
      <div>
        <Link to="/" className="text-2xl font-bold">
          EasyWear
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          {mainLayoutRoutes.map((route, index) => (
            <NavigationMenuItem key={index}>
              <NavLink
                className={({ isActive, isPending }) =>
                  cn(
                    "text-white",
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
    </div>
  );
};

export default Navbar;
