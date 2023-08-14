import TTNPage from "../pages/TTNPage";
import OfficesPage from "../pages/OfficesPage";
import ErrorPage from '../pages/ErrorPage';
import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
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