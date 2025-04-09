import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

import { Link, NavLink } from "react-router-dom";
import { SidebarProps } from "@/types/sidebar";

const Sidebar = ({
  open,
  onOpenChange,
  handleClose,
  side = "left",
  showLoginButton = false,

  routes,
}: SidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side={side} className="bg-gray-900 text-white">
        <div className="flex flex-col space-y-4 mt-8">
          {routes.map((route, index) => (
            <NavLink
              key={index}
              onClick={handleClose}
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
          ))}
          {showLoginButton && (
            <div className="mt-auto pt-4 border-t border-gray-700">
              <Button
                variant="outline"
                className="w-full text-black border-white hover:bg-white hover:text-gray-900"
                onClick={() => {
                  handleClose();
                }}
              >
                <Link to="/login">Login</Link>
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
