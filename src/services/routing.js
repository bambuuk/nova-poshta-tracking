import TTNPage from "../pages/TTNPage";
import OfficesPage from "../pages/OfficesPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TTNPage />
  },
  {
    path: '/offices',
    element: <OfficesPage />
  }
]);