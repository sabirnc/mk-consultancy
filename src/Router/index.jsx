import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound"


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/contact",
        element:<Contact />
    },
    {
        path:"*",
        element:<NotFound />
    }
])