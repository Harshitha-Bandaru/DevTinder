import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { Provider } from "react-redux";
import store from "./utils/store";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
