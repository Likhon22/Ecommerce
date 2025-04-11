import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainRoutes from "./routes/MainRoutes";
import Home from "./pages/Home";
import AdminLayout from "./layout/AdminLayout";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {MainRoutes()}
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin-dashboard" element={<AdminLayout />}>
          <Route index element={<Home />} />
          {AdminRoutes()}
        </Route>
      </Routes>
    </>
  );
}

export default App;
