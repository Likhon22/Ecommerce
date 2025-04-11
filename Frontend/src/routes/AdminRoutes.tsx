import { adminLayoutRoutes } from "@/constants/routes";
import { Route } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <>
      {adminLayoutRoutes?.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </>
  );
};

export default AdminRoutes;
