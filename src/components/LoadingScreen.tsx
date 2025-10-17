"use client";

import React from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-content">
        <div className="spinner" />
        <p className="loading-text">Loading…</p>
      </div>
    </div>
  );
}
