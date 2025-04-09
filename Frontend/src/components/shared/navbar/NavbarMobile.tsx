import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { mainLayoutRoutesWithoutLogin } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex items-center justify-between w-full bg-black">
      <Link to="/" className="text-2xl font-bold text-white">
        EasyWear
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-gray-900 text-white">
          <div className="flex flex-col space-y-4 mt-8">
            {mainLayoutRoutesWithoutLogin.map((route, index) => (
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
            <Button>
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
