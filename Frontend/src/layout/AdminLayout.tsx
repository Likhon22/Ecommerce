import AdminSidebar from "@/components/shared/navigation/sidebar/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="fixed md:static w-64">
        <AdminSidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-x-hidden overflow-y-auto p-12 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
