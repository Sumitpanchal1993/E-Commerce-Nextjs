// components/Modal.jsx
import React from 'react';
import './Modal.css'; // Import your custom CSS

function Modal({ isOpen, title, onClose, onOk, onCancel, children }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        {/* Close Button */}
        <button className="modal-close " onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {/* Title */}
        <h2 className="modal-title">{title}</h2>

        {/* Content */}
        <div className="modal-content">{children}</div>

        {/* Footer Buttons */}
        <div className="modal-footer">
          <button className="spbtn-secondary" onClick={onCancel || onClose}>
            Cancel
          </button>
          <button className="spbtn-primary" onClick={onOk}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
