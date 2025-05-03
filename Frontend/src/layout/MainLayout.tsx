import Navbar from "@/components/shared/navigation/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin-dashboard");
  return (
    <div>
      {!isAdminRoute && <Navbar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
