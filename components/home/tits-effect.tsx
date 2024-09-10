"use client"
import { useEffect } from 'react';
import styles from '@/components/css/TypingText.module.css'; // Importa los estilos

import VanillaTilt from 'vanilla-tilt';

const TiltEffect: React.FC = () => {
  useEffect(() => {
    const tiltElements = document.querySelectorAll('.tilt') as NodeListOf<HTMLElement>;

    VanillaTilt.init(tiltElements, {
      max: 20,
      speed: 400,
    });

    // Cleanup function to destroy VanillaTilt instances
    return () => {
      tiltElements.forEach(el => (el as any).vanillaTilt?.destroy());
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default TiltEffect;
