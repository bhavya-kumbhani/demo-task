import { createBrowserRouter } from "react-router-dom";
import { Login, SignUp, Users } from "../Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Users />,
  },
]);

export default router;
