import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const useScrollHider = (menuOpen) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (Math.abs(window.scrollY - lastScrollY) < 50) {
        return
      }
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  }
  useEffect(() => {
    if (!menuOpen) {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }
  }, [lastScrollY, menuOpen]);
  return {showHeader}
}