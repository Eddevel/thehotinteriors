'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const slides = [
  '/images/p1.jpeg',
  '/images/p2.jpg',   // Add more of your images here
  '/images/p3.jpg',
  '/images/p4.jpg',
];

export default function AboutHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`About background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <AnimatedSection animationType="fadeUp">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-serif tracking-tighter leading-none mb-6">
            Our Story
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
            Creating spaces that don&apos;t just look beautiful — they feel truly alive.
          </p>
        </div>
      </AnimatedSection>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest z-10">
        SCROLL TO DISCOVER
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'bg-primary w-8' : 'bg-white/40 w-2.5'
            }`}
          />
        ))}
      </div>
    </section>
  );
}