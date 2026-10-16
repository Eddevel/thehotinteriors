'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Okonta Emmanuel",
    role: "Founder & Creative Director",
    bio: "With over 5 years in luxury design, Emmanuel brings warmth, soul and luxury to every project.",
    image: "/images/pres.jpeg"
  },
  {
    name: "Aisha Omeru",
    role: "Design Director",
    bio: "Architect turned interior designer specializing in modern Asian-European fusion.",
    image: "/images/team2.jpg"
  },
 
];

export default function Team() {
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!teamRef.current) return;

    const cards = teamRef.current.querySelectorAll('.team-card');

    gsap.fromTo(cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <div ref={teamRef} className="grid md:grid-cols-3 gap-10">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="team-card group overflow-hidden rounded-3xl bg-dark-2 border border-white/10 hover:border-primary/30 transition-all"
        >
          <div className="relative h-96 overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-serif">{member.name}</h3>
            <p className="text-primary mt-1 text-sm tracking-widest">{member.role}</p>
            <p className="mt-6 text-gray-400 leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}