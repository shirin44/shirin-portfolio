// useSectionObserver.js
import { useEffect, useState } from 'react';
import SECTIONS from '../constants/sections';

export default function useSectionObserver() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActive(id);
        }
      });
    }, options);

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}