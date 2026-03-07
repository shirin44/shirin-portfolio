import React from "react";

/**
 * StickerLabel
 * - A small sticker / label UI piece
 * - Good for "Available for research", "Open to internships", etc.
 */
export default function StickerLabel({ title, subtitle }) {
  return (
    <div className="sticker">
      <div className="sticker__inner">
        <div className="sticker__title">{title}</div>
        {subtitle ? <div className="sticker__sub">{subtitle}</div> : null}
      </div>
    </div>
  );
}