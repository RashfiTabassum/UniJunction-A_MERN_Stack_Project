import React, { useRef, useEffect,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const TypingEffect = () => {
  const textRef = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%', // Adjust start position
        end: 'bottom 20%', // Adjust end position
        scrub: 1,
      },
    });

    const text = textRef.current.textContent.trim().split('');
    textRef.current.innerHTML = ''; // Clear the original text

    text.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      textRef.current.appendChild(span);

      tl.to(span, {
        opacity: 1,
        duration: 0.3,
      });
    });
  }, []);

  return (
    <div ref={textRef}>
      Your typed text here
    </div>
  );
};

export default TypingEffect;
