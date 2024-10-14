import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="text-3xl">Login Page</div>

    }
])

export default router;