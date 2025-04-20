"use client"
import { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, className = '', animationClass = 'opacity-100 translate-x-0', initialClass = 'opacity-0 translate-x-[-1%]' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply the final state when element is in view
          entry.target.classList.add(...animationClass.split(' '));
        }
      });
    }, {
      threshold: 0.1 // Trigger animation when 10% of the element is in view
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animationClass]);

  return (
    <div
      ref={elementRef}
      className={`${initialClass} ${className} transition-all duration-500`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
