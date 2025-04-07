import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { BlogsPage } from "../pages/BlogsPage";
import { BlogDetailsPage } from "../pages/BlogDetailsPage";
import { ProductsPage } from "../pages/ProductsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <h1>Contact Page</h1>,
            },
            {
                path: "blogs",
                element: <BlogsPage />,
            },
            {
                path: "blog-details/:id",
                element: <BlogDetailsPage />,
            },
            {
                path: "products",
                element: <ProductsPage />,
            },
            {
                path: "solutions",
                element: <h1>Solutions</h1>,
            },
        ],
    },
]);
