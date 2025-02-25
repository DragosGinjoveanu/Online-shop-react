import { useState, useEffect } from "react";

export default function Notification({ message, type = "info", duration }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible || !message) {
    return null;
  }

  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 text-white text-sm font-semibold rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${typeStyles[type]}`}
    >
      {message}
    </div>
  );
}
