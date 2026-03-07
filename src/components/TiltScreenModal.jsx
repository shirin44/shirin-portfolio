import React, { useEffect } from "react";

/**
 * TiltScreenModal
 * - Simple modal scaffold (for later: preview CV PDF, images, etc.)
 * - Click backdrop or press ESC to close
 */
export default function TiltScreenModal({ open, title, children, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title || "Modal"}>
      <button className="modal__backdrop" onClick={onClose} aria-label="Close modal backdrop" />
      <div className="modal__panel">
        <div className="modal__top">
          <div className="modal__title">{title}</div>
          <button className="modal__close" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}