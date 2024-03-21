import { createBrowserRouter } from "react-router-dom";
import { AddNumber } from "./pages/AddNumbers";
import { DetailedInformation } from "./pages/DetailedInformation";
import { EditNumber } from "./pages/EditNumber";
import { ListNumbers } from "./pages/ListNumbers";
import { Layout } from "./layout";
import { ProductsPage } from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ListNumbers />,
      },
      {
        path: "/add-numbers",
        element: <AddNumber />,
      },
      {
        path: "/detailed-information",
        element: <DetailedInformation />,
      },
      {
        // locahost:3000/numbers/dfasdf23r243r424
        path: "/numbers/:id",
        element: <DetailedInformation />,
      },
      {
        path: "/edit-number",
        element: <EditNumber />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
]);

export { router };
