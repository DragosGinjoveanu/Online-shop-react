import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Home from "./components/Home";
import NewProduct from "./components/products/NewProduct";
import ProductDetails from "./components/Products/ProductDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage message="Oops! Page not found." />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "create-new-product",
        element: <NewProduct />,
      },
      { path: "product/:title/details", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
