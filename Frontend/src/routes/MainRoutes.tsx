import { Route } from "react-router-dom";

import { mainLayoutRoutes } from "@/constants/routes";

const MainRoutes = () => {
  return (
    <>
      {mainLayoutRoutes?.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </>
  );
};

export default MainRoutes;
