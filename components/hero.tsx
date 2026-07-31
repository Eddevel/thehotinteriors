'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;

    if (!hero || !text) return;

    // Text animation
    gsap.fromTo(text,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out" 
      }
    );

    // Parallax background
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        if (hero) {
          gsap.to(hero, {
            backgroundPosition: `50% ${50 + self.progress * 30}%`,
            overwrite: true
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative  h-screen  flex flex-col items-center justify-center overflow-hidden bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/60  " />
       
      <div ref={textRef} className="relative   text-center px-6 ">
        <h1 className="text-5xl md:text-[5.5rem] mb-3 font-serif  ">
          Designing Homes<br />That <span className="text-primary">Feel Alive</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-5 ">
          Premium interior design that blends luxury, warmth, and modern elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-black text-lg px-10 py-7 rounded-full"
            
          >
            <Link href="/projects">Explore Our Work</Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/70 hover:bg-white/10 text-lg px-10 py-7 rounded-full"
            
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
        
          
        </div>
          <div className=" mt-5 py-2 flex flex-col items-center">
        <div className="text-xs uppercase  mb-3 text-white/60">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
        
      </div>

      
    </section>
  );
}