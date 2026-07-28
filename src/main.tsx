import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./Pages/Home/Home.tsx";
import Login from "./Pages/Login/Login.tsx";
import Player from "./Pages/Player/Player.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/player/:id",
        element: <Player />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
