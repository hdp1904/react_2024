import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import configureStore from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(

    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
