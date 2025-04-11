import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import { SidebarProps } from "@/types/sidebar";
import EButton from "@/components/ui/EButton";
import SidebarContent from "./SidebarContent";

const Sidebar = ({
  open,
  onOpenChange,
  handleClose,
  side = "left",
  showLoginButton = false,
  routes,
}: SidebarProps) => {
  return (
    <>
      {/* Mobile Sidebar (Sheet) */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={onOpenChange}>
          <SheetTrigger className="m-2" asChild>
            <EButton variant="ghost" size="icon">
              <Menu className="text-white " />
            </EButton>
          </SheetTrigger>
          <SheetContent side={side} className="bg-primary text-white">
            <SidebarContent
              routes={routes}
              handleClose={handleClose}
              showLoginButton={showLoginButton}
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar (Static) */}
      <div className="hidden md:flex md:flex-col md:w-64 bg-primary text-white min-h-screen px-6 py-8">
        <SidebarContent
          routes={routes}
          handleClose={() => {}}
          showLoginButton={showLoginButton}
        />
      </div>
    </>
  );
};

export default Sidebar;
