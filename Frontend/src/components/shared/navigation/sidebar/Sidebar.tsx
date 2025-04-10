import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

import { Link, NavLink } from "react-router-dom";
import { SidebarProps } from "@/types/sidebar";
import EButton from "@/components/ui/EButton";

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
        <EButton variant="ghost" size="icon">
          <Menu className="text-white" />
        </EButton>
      </SheetTrigger>
      <SheetContent side={side} className="bg-primary text-white">
        <div className="flex flex-col px-6 space-y-4 mt-8">
          {routes.map((route, index) => (
            <NavLink
              key={index}
              onClick={handleClose}
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
          ))}
          {showLoginButton && (
            <div className="mt-auto pt-4 border-t border-gray-700">
              <EButton
                onClick={() => {
                  handleClose();
                }}
              >
                <Link to="/login">Login</Link>
              </EButton>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
