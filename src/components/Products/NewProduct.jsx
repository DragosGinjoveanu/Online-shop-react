import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { productsActions } from "../../store/products-slice";
import { productExists } from "../../store/helpers/products";

import CustomInput from "../../ui/Input";
import CustomButton from "../../ui/Button";

export default function NewProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((store) => store.products.products);

  const [warning, setWarning] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const productData = Object.fromEntries(fd.entries());

    productData.price = Number(productData.price);
    productData.quantity = Number(productData.quantity);

    if (!productExists(products, productData.title)) {
      dispatch(productsActions.createProduct(productData));
      navigate("/");
      return;
    }

    setWarning("Title is already taken. Please write an unique title!");
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Product
      </h2>
      {warning && <h2 className="text-red-800">{warning}</h2>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <CustomInput
            label="Title"
            type="text"
            id="title"
            name="title"
            required
            minLength={3}
            placeholder="Enter product title (will also be product id)"
            onChange={() => setWarning(null)}
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="Image URL"
            type="text"
            id="image"
            name="image"
            required
            minLength={4}
            placeholder="Enter product image file name e.g: apple.png"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="Description"
            type="textarea"
            id="description"
            name="description"
            required
            minLength={10}
            placeholder="Enter product description"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="Price"
            type="number"
            id="price"
            name="price"
            required
            minLength={1}
            placeholder="Enter product price"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="Quantity"
            type="number"
            id="quantity"
            name="quantity"
            required
            minLength={1}
            placeholder="Enter available product quantity"
          />
        </div>

        <div className="mb-4">
          <CustomInput
            label="Category"
            type="text"
            id="category"
            name="category"
            required
            minLength={2}
            placeholder="Enter product category"
          />
        </div>

        <CustomButton>Submit</CustomButton>
      </form>
    </div>
  );
}
