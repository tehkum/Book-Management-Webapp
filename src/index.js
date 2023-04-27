import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { UseBooks, BookProvider } from "./context/BookProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { UseBooks };

root.render(
  <StrictMode>
    <Router>
      <BookProvider>
        <App />
      </BookProvider>
    </Router>
  </StrictMode>
);
