import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
])
export default function App() {
    return <RouterProvider router={routers} />
}
