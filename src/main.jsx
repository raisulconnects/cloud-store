import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { rootRouter } from "./Router/router.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import { AuthProvider } from "./Contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={rootRouter} />
    </AuthProvider>
  </Provider>
);
