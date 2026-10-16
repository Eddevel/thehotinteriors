'use client';
import { useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectModal from './ProjectModal';

type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  images: string[];
  year: string;
};



gsap.registerPlugin(ScrollTrigger);

// Define type locally to avoid import issues

// Rich sample data
const projects: Project[] = [
  {
    id: '1',
    title: "Aire Office",
    location: "Ikeja, Lagos, Nigeria",
    category: "Minimal",
    description: "A serene office space blending minimalist design with natural elements for a calm work environment.",
    images: ["/images/office.jpeg", "/images/p1-2.jpg"],
    year: "2026"
  },
  {
    id: '2',
    title: "Urban Luxe house",
    location: "Lagos, Nigeria",
    category: "Luxury",
    description: "Sophisticated high-rise residence with dramatic views and custom millwork.",
    images: ["/images/living.jpeg"],
    year: "2026"
  },
  {
    id: '3',
    title: "Modern Family Home",
    location: "Lekki Phase 1, Nigeria",
    category: "Modern",
    description: "A warm contemporary family home designed for multigenerational living.",
    images: ["/images/home.jpeg"],
    year: "2025"
  },
  {
    id: '4',
    title: "Pilates Studio",
    location: "Lekki, Lagos, Nigeria",
    category: "Warm Contemporary",
    description: "Earthy textures and artistic details in this soulful private studio.",
    images: ["/images/pilate.jpeg"],
    year: "2026"
  }
];

const categories = ["All", "Modern", "Minimal", "Warm Contemporary", "Luxury"];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeFilter === cat 
                ? 'bg-primary text-black' 
                : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer"
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-primary text-sm tracking-widest">{project.location}</p>
              <h3 className="text-3xl font-serif mt-2">{project.title}</h3>
              <p className="text-white/70 text-sm mt-1">{project.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}