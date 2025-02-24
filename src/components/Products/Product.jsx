import { useNavigate } from "react-router-dom";

export default function Product({ productData }) {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img
          className="p-8 rounded-t-lg object-cover w-full h-64"
          src={`/images/${productData.image}`}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {productData.title}
        </h5>
        <div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${productData.price}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() =>
              navigate(
                `/product/${encodeURIComponent(productData.title)}/details`
              )
            }
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Product details
          </button>
          <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
