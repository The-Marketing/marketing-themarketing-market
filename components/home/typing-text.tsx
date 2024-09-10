'use client';
import { useEffect, useRef } from 'react';
import Typed, { TypedOptions } from 'typed.js';
import styles from '@/components/css/TypingText.module.css'; // Importa los estilos


const TypingText: React.FC = () => {
  const typingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typingRef.current) {
      const options: TypedOptions = {
        strings: [
          "arquitetura digital",
          "criação de aplicativos",
          "desenvolvimento web",
          "inteligência artificial",
          "processo contínuos",
        ],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
        cursorChar: '|' // Define el carácter del cursor
      };

      new Typed(typingRef.current, options);
    }
  }, []);

  return <div className={styles.typingText} ref={typingRef} />;
};

export default TypingText;