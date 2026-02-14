// src/App.tsx
import "./App.css";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import ThankYou from "./components/ThankYou";
import BackgroundFX from "./components/BackgroundFX";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FormSubmission from "./components/FormSubmission";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <BackgroundFX />
      <Routes>
        <Route
          path="/shopify-seo-agency"
          element={
            <div style={{ position: "relative", zIndex: 1 }}>
              <Home />
            </div>
          }
        />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/thank-you" element={<FormSubmission />} />
        <Route path="/meeting-booked" element={<ThankYou />} />
        <Route path="*" element={<Navigate to="/shopify-seo-agency" replace />} />
        <Route path="/" element={<Navigate to="/shopify-seo-agency" replace />} />

      </Routes>

      <FloatingWhatsApp />
    </>
  );
}
