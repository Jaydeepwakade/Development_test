import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import ProductContext from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductContext>
    <Provider store={store}>
      <App />
    </Provider>
  </ProductContext>
);
