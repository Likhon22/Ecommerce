import AdminSidebar from "@/components/shared/navigation/sidebar/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex flex-row h-screen">
      <div>
        <AdminSidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
