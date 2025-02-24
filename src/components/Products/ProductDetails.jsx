import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { title } = useParams(); // Extract the title from the URL

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {decodeURIComponent(title)}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          More details about <strong>{decodeURIComponent(title)}</strong> will
          be displayed here.
        </p>
      </div>
    </div>
  );
}
