"use client";
import React, { useEffect } from 'react';
import './Loader.css';

function Loader() {
  // Disable body scroll when loader mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Cleanup: restore scroll when loader unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="loaderOverlay">
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
