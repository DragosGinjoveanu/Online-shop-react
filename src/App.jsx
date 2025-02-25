import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Home from "./components/Home";
import NewProduct from "./components/products/NewProduct";
import ProductDetails from "./components/Products/ProductDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "shopping-cart", element: <ShoppingCart /> },
      { path: "create-new-product", element: <NewProduct /> },
      { path: "product/:title/details", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
