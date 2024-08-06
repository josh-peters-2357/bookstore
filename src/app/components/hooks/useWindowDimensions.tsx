import { useState, useEffect } from 'react';



export default function useWindowDimensions() {
  const [isMobile, setIsMobile] = useState<boolean>(false)


  useEffect(() => {
    function handleResize() {
        setIsMobile(window.screen.width <= 700)
        console.log(window.screen.width <=700)
        console.log(isMobile)
    }
   
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isMobile: isMobile }
}