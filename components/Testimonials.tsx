'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "AIRE",
    role: "CEO, Aire",
    quote: "Working with TheHotInteriors transformed our office into a piece of art. Their attention to warmth and detail is unmatched.",
    image: "/images/office.jpeg"
  },
  {
    name: "Adeola Johnson",
    role: "Founder, Johnson Real Estate",
    quote: "They captured exactly what we wanted — luxurious yet inviting. Our guests constantly compliment the interiors.",
    image: "/images/p3.jpg"
  },
  {
    name: "Chief Emeka Okafor",
    role: "Private Client",
    quote: "The level of personalization and creativity exceeded all expectations. Our villa feels like an extension of our soul.",
    image: "/images/igbo.jpg"
  }
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-card", 
        { opacity: 0, x: 100 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 75%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sliderRef} className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card bg-dark-2 border border-white/10 rounded-3xl p-8 flex flex-col"
          >
            <div className="flex-1">
              <div className="text-3xl md:text-5xl text-primary/20 mb-6">“</div>
              <p className="text-lg leading-relaxed text-gray-200 italic">
                {testimonial.quote}
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                {/* Replace with Image component in production */}
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}