'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Residential Design",
    description: "Bespoke homes that reflect your lifestyle with warmth and sophistication.",
    icon: "🏠",
    features: ["Full Interior Design", "Space Planning", "Custom Furniture", "Lighting Design"]
  },
  {
    title: "Commercial Spaces",
    description: "Elevated workspaces and retail environments that inspire and impress.",
    icon: "🏢",
    features: ["Office Design", "Retail Interiors", "Hospitality", "Branding Integration"]
  },
  {
    title: "Renovation & Restoration",
    description: "Thoughtful transformations that honor existing architecture while embracing modernity.",
    icon: "🔨",
    features: ["Structural Updates", "Heritage Restoration", "Kitchen & Bath", "Sustainable Upgrades"]
  },
  {
    title: "Consultation & Styling",
    description: "Expert guidance for those seeking refined direction and curated finishes.",
    icon: "✨",
    features: ["Design Consultation", "Material Selection", "Art Curation", "Seasonal Styling"]
  }
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.service-card');

    gsap.fromTo(cards, 
      { 
        opacity: 0, 
        y: 80 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="grid md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-card group bg-dark-2 border border-white/10 rounded-3xl p-10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
        >
          <div className="text-5xl mb-8">{service.icon}</div>
          
          <h3 className="text-4xl font-serif mb-4 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-3 mb-10">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all text-sm uppercase tracking-widest font-medium">
            Learn More 
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      ))}
    </div>
  );
}