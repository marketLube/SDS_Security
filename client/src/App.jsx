import React from "react";
import { HomePage } from "./pages/HomePage";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
