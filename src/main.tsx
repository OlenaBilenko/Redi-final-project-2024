import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/app/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./layouts/layout.tsx";
import { About } from "./routes/about/about.tsx";
import { BodyTempPage } from "./routes/body-temp/body-temp-page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="body-temp" element={<BodyTempPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
