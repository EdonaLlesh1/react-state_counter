import React, { StrictMode } from "react";
import { createRoot } from "react-dom";

import App from "./App";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
