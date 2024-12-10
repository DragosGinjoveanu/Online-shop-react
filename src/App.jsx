import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Home from "./components/Home";
import NewProduct from "./components/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "create-new-product", element: <NewProduct /> },
    ],
  },
]);

function App() {
  const products = useSelector((store) => store.products.products);
  console.log(products);

  return <RouterProvider router={router} />;
}

export default App;
