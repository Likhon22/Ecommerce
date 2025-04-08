import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainRoutes from "./routes/MainRoutes";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {MainRoutes()}
        </Route>
      </Routes>
    </>
  );
}

export default App;
