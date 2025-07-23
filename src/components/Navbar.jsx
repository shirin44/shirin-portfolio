// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-6 right-6 z-50"
        onClick={() => setOpen(!open)}
        aria-label="Menu Toggle"
      >
        <div className="space-y-1">
          <span className="block h-0.5 w-6 bg-indigo-600"></span>
          <span className="block h-0.5 w-6 bg-indigo-600"></span>
        </div>
      </button>

      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          className="absolute top-6 right-6 text-2xl font-bold"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8 text-indigo-600 text-lg font-semibold">
          <a href="#work" onClick={() => setOpen(false)}>My Work</a>
          <a href="#shelf" onClick={() => setOpen(false)}>My Shelf</a>
          <a href="#resume" onClick={() => setOpen(false)}>My Résumé</a>
          <div className="text-center text-sm mt-8 space-y-2">
            <p>hello@you.dev</p>
            <p>@telegram_handle</p>
            <div className="space-x-4">
              <a href="#" target="_blank">GH</a>
              <a href="#" target="_blank">LN</a>
              <a href="#" target="_blank">YT</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
