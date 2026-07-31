'use client';
import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeIn' | 'scaleUp' | 'stagger';
  delay?: number;
  threshold?: number; // scroll trigger start position
}

export default function AnimatedSection({
  children,
  className = "",
  animationType = 'fadeUp',
  delay = 0,
  threshold = 75,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Respect user's reduced motion preference
    if (typeof window !== 'undefined' && 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let ctx = gsap.context(() => {
      const elements = section.children;

      switch (animationType) {
        case 'fadeUp':
          gsap.fromTo(section,
            { 
              opacity: 0, 
              y: 80 
            },
            { 
              opacity: 1, 
              y: 0, 
              duration: 1.1, 
              ease: "power3.out",
              delay: delay,
              scrollTrigger: {
                trigger: section,
                start: `top ${threshold}%`,
                toggleActions: "play none none reverse",
              }
            }
          );
          break;

        case 'fadeIn':
          gsap.fromTo(section,
            { opacity: 0 },
            { 
              opacity: 1, 
              duration: 1.2, 
              delay: delay,
              scrollTrigger: {
                trigger: section,
                start: `top ${threshold}%`,
              }
            }
          );
          break;

        case 'scaleUp':
          gsap.fromTo(section,
            { 
              opacity: 0, 
              scale: 0.92 
            },
            { 
              opacity: 1, 
              scale: 1, 
              duration: 1.3, 
              ease: "power3.out",
              delay: delay,
              scrollTrigger: {
                trigger: section,
                start: `top ${threshold}%`,
              }
            }
          );
          break;

        case 'stagger':
          gsap.fromTo(Array.from(elements),
            { 
              opacity: 0, 
              y: 60 
            },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.9, 
              stagger: 0.1, 
              ease: "power3.out",
              delay: delay,
              scrollTrigger: {
                trigger: section,
                start: `top ${threshold}%`,
              }
            }
          );
          break;
      }
    });

    return () => ctx.revert();
  }, [animationType, delay, threshold]);

  return (
    <div ref={sectionRef} className={`gsap-section ${className}`}>
      {children}
    </div>
  );
}