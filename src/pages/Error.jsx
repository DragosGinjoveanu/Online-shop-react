import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

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

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Home
        </button>
      </div>
    </>
  );
}
