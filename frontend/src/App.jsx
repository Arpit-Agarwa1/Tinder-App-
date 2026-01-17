import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutletComponent from "./components/OutletComponent.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Profile from "./pages/Profile.jsx";
import TinderProvider from "./context/context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletComponent />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <TinderProvider>
        <RouterProvider router={router} />
      </TinderProvider>
    </>
  );
}
