"use client"

import { useEffect } from 'react'
import AOS from 'aos';

export const AosInit = () => {
  
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000,
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
    });
  }, [])

  return null
}
