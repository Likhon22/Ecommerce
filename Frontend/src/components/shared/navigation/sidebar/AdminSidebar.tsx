import { adminLayoutRoutes } from "@/constants/routes";
import Sidebar from "./Sidebar";
import { useState } from "react";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Sidebar
        open={open}
        handleClose={handleClose}
        onOpenChange={setOpen}
        routes={adminLayoutRoutes}
      />
    </div>
  );
};

export default AdminSidebar;
