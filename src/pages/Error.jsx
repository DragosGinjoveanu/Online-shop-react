import { useNavigate } from "react-router-dom";

import CustomButton from "../ui/Button";

export default function ErrorPage({ message }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">{message}</p>
        <img
          src="/images/unicorn.png"
          alt="Lost Unicorn"
          className="w-64 h-64 object-contain mb-6"
        />
        <div className="w-auto">
          <CustomButton onClick={() => navigate("/")}>Go Home</CustomButton>
        </div>
      </div>
    </>
  );
}
//className="  transition duration-300 ease-in-out transform hover:scale-105"
