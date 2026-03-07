import React from "react";

/**
 * ScotchedPhoto
 * - Uses an image with a "taped/scotched" vibe (pure CSS)
 * - Drop your photo in /public/images/me.jpg by default
 */
export default function ScotchedPhoto({
  src = "images/me.jpg",
  alt = "Portrait",
  caption = "",
}) {
  return (
    <figure className="scotch">
      <div className="scotch__tape scotch__tape--l" aria-hidden="true" />
      <div className="scotch__tape scotch__tape--r" aria-hidden="true" />
      <img className="scotch__img" src={src} alt={alt} />
      {caption ? <figcaption className="scotch__cap">{caption}</figcaption> : null}
    </figure>
  );
}