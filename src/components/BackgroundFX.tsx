// src/BackgroundFX.tsx
import React from "react";

const BackgroundFX: React.FC = () => {
  return (
    <div className="bg-blobs-layer" aria-hidden>
      <div className="bg-blob bg-blob--1"></div>
      <div className="bg-blob bg-blob--2"></div>
    </div>
  );
};

export default BackgroundFX;
