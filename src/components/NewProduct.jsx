import { useDispatch } from "react-redux";
import { productsActions } from "../store/products-slice";

export default function NewProduct() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const productData = Object.fromEntries(fd.entries());

    // !!! should add extra verifications to not have duplicate id / title and display an error in page

    dispatch(productsActions.createProduct(productData));
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Product
      </h2>
      <form onSubmit={handleSubmit}>
        {/* ID */}
        <div className="mb-4">
          <label
            htmlFor="id"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ID
          </label>
          <input
            required
            minLength={1}
            type="text"
            id="id"
            name="id"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter product ID"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            required
            minLength={3}
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter product title"
          />
        </div>

        {/* Image */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image URL
          </label>
          <input
            minLength={4}
            required
            type="text"
            id="image"
            name="image"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter product image file name e.g: apple.png"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            required
            minLength={10}
            id="description"
            name="description"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter product description"
            rows="4"
          ></textarea>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Price
          </label>
          <input
            required
            minLength={1}
            type="number"
            id="price"
            name="price"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter product price"
          />
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Quantity
          </label>
          <input
            required
            minLength={1}
            type="number"
            id="quantity"
            name="quantity"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter available product quantity"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <input
            required
            minLength={2}
            type="text"
            id="category"
            name="category"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter product category"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
