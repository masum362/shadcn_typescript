import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import TypeProvider from "./context/TypeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TypeProvider>
      <RouterProvider router={router} />
    </TypeProvider>
  </StrictMode>
);
