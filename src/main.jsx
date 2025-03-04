import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import store from "./store/index.js";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/authContext/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
