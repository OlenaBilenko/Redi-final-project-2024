import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/app/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./layouts/layout.tsx";
import { About } from "./routes/about/about.tsx";
import { BodyTempPage } from "./routes/body-temp/body-temp-page.tsx";
import { ViewTemperature } from "./routes/temperature/view-temperature.tsx";
import { InalationPlanningRoute } from "./routes/inhalation-planning/inhalation-planning.tsx";
import { BodyWeightRoute } from "./routes/body-weight/body-weight-page.tsx";
import "react-datepicker/dist/react-datepicker.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="body-temp" element={<BodyTempPage />} />
          <Route path="inhalation" element={<InalationPlanningRoute />} />
          <Route path="body-weight" element={<BodyWeightRoute />} />
          <Route path="temperature/:id" element={<ViewTemperature />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
