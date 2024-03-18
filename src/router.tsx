import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/layout";
import { AddNumber } from "./pages/AddNumbers";
import { DetailedInformation } from "./pages/DetailedInformation";
import { EditNumber } from "./pages/EditNumber";
import { ListNumbers } from "./pages/ListNumbers";
const router = createBrowserRouter([
    {
        path: "/",
    element: <Layout />,
    children: [
        {
            path : "/",
            element:<ListNumbers/>
        },
        {
            path : "/AddNumbers",
            element:<AddNumber/>
        },
        {
            path : "/DetailedInformation",
            element:<DetailedInformation/>
        },
        {
            path : "/EditNumber",
            element:<EditNumber/>
        }
    ]

    }
])

export {router}