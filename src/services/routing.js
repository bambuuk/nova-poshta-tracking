import TTNPage from "../pages/TTNPage";
import OfficesPage from "../pages/OfficesPage";
import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TTNPage />,
      },
      {
        path: 'offices',
        element: <OfficesPage />
      }
    ]
  }
]);