import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { mainLayoutRoutesWithoutLogin } from "@/constants/routes";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex items-center justify-between w-full bg-black">
      <Link to="/" className="text-2xl font-bold text-white">
        EasyWear
      </Link>
      <Sidebar
        open={open}
        onOpenChange={setOpen}
        handleClose={handleClose}
        routes={mainLayoutRoutesWithoutLogin}
        showLoginButton={true}
      />
    </div>
  );
};

export default NavbarMobile;
