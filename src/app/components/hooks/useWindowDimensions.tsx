import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile((
      navigator.userAgent.match(/Android/i) || 
      navigator.userAgent.match(/webOS/i) || 
      navigator.userAgent.match(/iPhone/i) || 
      navigator.userAgent.match(/iPad/i) || 
      navigator.userAgent.match(/iPod/i) || 
      navigator.userAgent.match(/BlackBerry/i) || 
      navigator.userAgent.match(/Windows Phone/i)) !== null);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return isMobile;
}